const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#ffae00',
				logo: {
					gradients: {
						primary: {
							from: '#C471F5',
							to: '#FA70CD'
						},
						secondary: {
							from: "#FDB051",
							via: "#F2203E",
							to: "#5342D6"
						},
						tertiary: {
							DEFAULT: '#383C93'
						}
					},
					secondary: '#ffae00',
					tertiary: '#00FFFF'
				}
			},
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
