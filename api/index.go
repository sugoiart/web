package index

import (
	"encoding/json"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
	response := &IndexResponse{
		Status: 200,
		Message: "Welcome to sugoiart's API. All routes are based off of https://art.hayasaka.moe/api.",
		Routes: []IndexRoute{
			{
				Path: "/art/random",
				Method: "GET",
				Url: "https://art.hayasaka.moe/api/art/random",
			},
			{
				Path: "/art/all",
				Method: "GET",
				Url: "https://art.hayasaka.moe/api/art/all",
			},
		},
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		panic(err)
	}
}

type IndexResponse struct {
	Status int `json:"status"`
	Message string `json:"message"`
	Routes []IndexRoute `json:"routes"`
}

type IndexRoute struct {
	Path string `json:"path"`
	Method string `json:"method"`
	Url string `json:"url"`
}