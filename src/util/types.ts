export interface AllPhotos {
	data: Photo[];
	status: number;
	sha: string;
}

export interface Photo {
	url: string;
	sha: string;
}

export interface RandomPhoto {
	url: string;
	sha: string;
	status: number;
	orientation: string;
}

export interface BackgroundState {
	url: string;
	isFallback: boolean;
}

export interface ApiRouteProps {
	method: "GET" | "POST";
	route: string;
	description: string;
	fullUrl: string;
}
