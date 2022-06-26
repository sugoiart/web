package art

import (
	"artmoe/goutil/artutil"
	"encoding/json"
	"math/rand"
	"net/http"
	"strings"
)

func Random(w http.ResponseWriter, r *http.Request) {
	var response *artutil.RandomArt
	githubresp := artutil.GithubTree{}
	artutil.RequestImages("https://api.github.com/repos/artmoe/art/git/trees/master?recursive=1", &githubresp)
	for {
		random := githubresp.Tree[rand.Intn(len(githubresp.Tree))]
		if (random.Type == "blob") && (strings.HasSuffix(random.Path, ".jpg") || strings.HasSuffix(random.Path, ".png") || strings.HasSuffix(random.Path, ".gif")) {
			url := "https://raw.githubusercontent.com/artmoe/art/master/" + random.Path
			url = strings.ReplaceAll(url, " ", "%20")
			sha := random.Sha
			response = &artutil.RandomArt{Url: url, Status: 200, Sha: sha}
			break
		}
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		panic(err)
	}
}