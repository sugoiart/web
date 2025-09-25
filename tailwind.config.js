module.exports = {
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: true, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				indieflower: ["Indie Flower"],
				nunito: ["Nunito"],
				kgcs: ["kgcs"],
				lexreg: ["lexreg"],
				lexbold: ["lexbold"],
			},
			colors: {
				"navbar-bg": "rgba(19, 19, 26, 0.8)",
				"normal-bg": "#13131a",
			},
			backgroundImage: {
				"normal-bg-img": "url('/background.jpg')",
			},
		},
	},
};
