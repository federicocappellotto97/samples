import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputVariants = cva(
	'border-2 inline-block rounded-lg shadow-lg border-black pl-4 py-2 leading-none tracking-widest disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none font-semibold focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 w-full placeholder:text-black/50',
	{
		variants: {
			error: {
				true: 'border-tertiary',
				false: ''
			},
			icon: {
				true: 'pr-10',
				false: 'pr-4'
			}
		},
		defaultVariants: {
			error: false
		}
	}
);

/**
 * @function
 * @param {Object} variants
 */
export const input = (variants) => twMerge(inputVariants(variants));
