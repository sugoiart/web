export interface AllPhotos {
    data: Photo[];
    status: number;
    sha: string;
}

export interface Photo {
    url: string;
    sha: string;
}