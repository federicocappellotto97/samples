const plugin = require('tailwindcss/plugin');

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#fad61d',
				secondary: '#a174ff',
				tertiary: '#ff6b6b'
			},
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
			},
			boxShadow: {
				sm: '1px 2px 0px 0px rgba(0,0,0)',
				md: '2px 4px 0px 0px rgba(0,0,0)',
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
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}
			});
		}),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')({
			strategy: 'class' // only generate classes
		}),
		plugin(function groupPeer({ addVariant }) {
			let pseudoVariants = ['checked'].map((variant) =>
				Array.isArray(variant) ? variant : [variant, `&:${variant}`]
			);

			for (let [variantName, state] of pseudoVariants) {
				addVariant(`group-peer-${variantName}`, (ctx) => {
					let result = typeof state === 'function' ? state(ctx) : state;
					return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &');
				});
			}
		})
	],
	darkMode: 'class'
};
