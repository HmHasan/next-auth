module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['"Exo 2"', "sans-serif"],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("tailwind-bootstrap-grid")({
			containerMaxWidths: {
				sm: "540px",
				md: "720px",
				lg: "960px",
				xl: "1140px",
			},
		}),
	],
	corePlugins: {
		container: false,
	},
}
