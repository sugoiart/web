import { useState, useEffect } from "react";
import { RandomPhoto, BackgroundState } from "../util/types";

export const useRandomImage = (apiUrl: string, fallbackUrl: string): BackgroundState => {
	const [background, setBackground] = useState<BackgroundState>({
		url: fallbackUrl,
		isFallback: true,
	});

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await fetch(apiUrl);
				if (!response.ok) {
					throw new Error("API response was not ok.");
				}
				const data: RandomPhoto = await response.json();

				if (data && data.url) {
					const img = new Image();
					img.src = data.url;
					img.onload = () => setBackground({ url: data.url, isFallback: false });
					img.onerror = () => console.error("Failed to load image from API:", data.url);
				}
			} catch (error) {
				console.error("Failed to fetch random image from API:", error);
			}
		};

		fetchImage();
	}, [apiUrl, fallbackUrl]);

	return background;
};
