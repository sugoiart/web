package art

import (
	"artmoe/goutil/artutil"
	"encoding/json"
	"math/rand"
	"net/http"
	"strings"
)

func RandomViewHandler(w http.ResponseWriter, r *http.Request) {
	orien := r.URL.Query()["orien"]
	var response *artutil.RandomArt
	if len(orien) > 0 {
		if orien[0] == "portrait" || orien[0] == "landscape" || orien[0] == "square" {
			response = RandomArtwork(orien[0])
		} else {
			response = RandomArtwork("")
		}
	} else {
		response = RandomArtwork("")
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		panic(err)
	}
}

func RandomArtwork(orientation string) *artutil.RandomArt {
	var response *artutil.RandomArt
	githubresp := artutil.GithubTree{}
	artutil.RequestImages("https://api.github.com/repos/artmoe/art/git/trees/master?recursive=1", &githubresp)

	var list []artutil.GithubTreeNode
	if orientation != "" {
		list = getArtOfOrientation(orientation)
	} else {
		list = githubresp.Tree
	}

	for {
		random := list[rand.Intn(len(list))]
		if (random.Kind == "blob") && (strings.HasSuffix(random.Path, ".jpg") || strings.HasSuffix(random.Path, ".png") || strings.HasSuffix(random.Path, ".gif")) {
			url := "https://raw.githubusercontent.com/artmoe/art/master/" + random.Path
			url = strings.ReplaceAll(url, " ", "%20")
			sha := random.Sha
			response = &artutil.RandomArt{Url: url, Status: 200, Sha: sha}
			break
		}
	}
	
	return response
}

func getArtOfOrientation(orientation string) []artutil.GithubTreeNode {
	var list []artutil.GithubTreeNode
	githubresp := artutil.GithubTree{}
	artutil.RequestImages("https://api.github.com/repos/sugoiart/art/git/trees/master?recursive=1", &githubresp)

	for _, s := range githubresp.Tree {
		if strings.Contains(s.Path, "/" + orientation + "/") {
			if (s.Kind == "blob") && (strings.HasSuffix(s.Path, ".jpg") || strings.HasSuffix(s.Path, ".png") || strings.HasSuffix(s.Path, ".gif")) {
				url := "https://raw.githubusercontent.com/sugoiart/art/master/" + s.Path
				url = strings.ReplaceAll(url, " ", "%20")
				path := s.Path
				sha := s.Sha
				mode := s.Mode
				kind := s.Kind
				size := s.Size
				list = append(list, artutil.GithubTreeNode{Path: path, Mode: mode, Kind: kind, Sha: sha, Size: size, Url: url})
			}
		}
	}
	
	return list
}