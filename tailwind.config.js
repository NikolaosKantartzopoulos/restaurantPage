module.exports = {
	content: [
		"./dist/*.html",
		"./dist/bundle.js",
		"./src/style.css",
		"./src/Dancing_Script/*.ttf",
	],
	theme: {
		extend: {
			fontFamily: {
				dancing: '"dancing", "sans-serif"',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
