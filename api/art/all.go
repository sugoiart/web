package art

import (
	"artmoe/goutil/artutil"
	"encoding/json"
	"strings"
	"net/http"
)

func AllViewHandler(w http.ResponseWriter, r *http.Request) {
	orien := r.URL.Query()["orien"]
	var response *artutil.AllArt
	if len(orien) > 0 {
		if orien[0] == "portrait" || orien[0] == "landscape" || orien[0] == "square" {
			response = getAllArtOfOrientation(orien[0])
		} else {
			response = AllArtwork()
		}
	} else {
		response = AllArtwork()
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		panic(err)
	}
}

func AllArtwork() *artutil.AllArt {
	githubresp := artutil.GithubTree{}
	artutil.RequestImages("https://api.github.com/repos/sugoiart/art/git/trees/master?recursive=1", &githubresp)
	response := &artutil.AllArt{Data: []artutil.AllArtData{}, Status: 200, Sha: githubresp.Sha, Orientation: "any"}
	for _, node := range githubresp.Tree {
		if (node.Kind == "blob") && (strings.HasSuffix(node.Path, ".jpg") || strings.HasSuffix(node.Path, ".png") || strings.HasSuffix(node.Path, ".gif")) {
			url := "https://raw.githubusercontent.com/sugoiart/art/master/" + node.Path
			url = strings.ReplaceAll(url, " ", "%20")
			response.Data = append(response.Data, artutil.AllArtData{Url: url, Sha: node.Sha})
		}
	}

	return response
}

func getAllArtOfOrientation(orientation string) *artutil.AllArt {
	githubresp := artutil.GithubTree{}
	artutil.RequestImages("https://api.github.com/repos/sugoiart/art/git/trees/master?recursive=1", &githubresp)
	response := &artutil.AllArt{Data: []artutil.AllArtData{}, Status: 200, Sha: githubresp.Sha, Orientation: orientation}
	for _, s := range githubresp.Tree {
		if strings.Contains(s.Path, "/" + orientation + "/") {
			if (s.Kind == "blob") && (strings.HasSuffix(s.Path, ".jpg") || strings.HasSuffix(s.Path, ".png") || strings.HasSuffix(s.Path, ".gif")) {
				url := "https://raw.githubusercontent.com/sugoiart/art/master/" + s.Path
				url = strings.ReplaceAll(url, " ", "%20")
				sha := s.Sha
				response.Data = append(response.Data, artutil.AllArtData{Url: url, Sha: sha})
			}
		}
	}
	
	return response
}