const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#fad61d',
				secondary: '#2966cc',
				tertiary: '#fa3236'
			},
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
			},
			boxShadow: {
				lg: '4px 6px 0px 0px rgba(0,0,0)'
			}
		}
	},
	plugins: []
};
