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
		},
		fontSize: {
			10: '0.625rem',
			12: '0.75rem',
			14: '0.875rem',
			16: '1rem',
			18: '1.125rem',
			20: '1.25rem',
			22: '1.375rem',
			24: '1.5rem',
			32: '2rem'
		}
	},
	plugins: []
};
