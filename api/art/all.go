package art

import (
	"artmoe/goutil/artutil"
	"encoding/json"
	"strings"
	"net/http"
)

func All(w http.ResponseWriter, r *http.Request) {
	
	githubresp := artutil.GithubTree{}
	artutil.RequestImages("https://api.github.com/repos/artmoe/art/git/trees/master?recursive=1", &githubresp)
	response := &artutil.AllArt{Data: []artutil.AllArtData{}, Status: 200, Sha: githubresp.Sha}
	for _, node := range githubresp.Tree {
		if (node.Kind == "blob") && (strings.HasSuffix(node.Path, ".jpg") || strings.HasSuffix(node.Path, ".png") || strings.HasSuffix(node.Path, ".gif")) {
			url := "https://raw.githubusercontent.com/artmoe/art/master/" + node.Path
			url = strings.ReplaceAll(url, " ", "%20")
			response.Data = append(response.Data, artutil.AllArtData{Url: url, Sha: node.Sha})
		}
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		panic(err)
	}
}