import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
	'border-2 inline-block overflow-hidden relative rounded-lg shadow-lg border-black py-4 px-8 font-bold leading-none tracking-widest transition-all duration-200 ease-out group disabled:opacity-50 disabled:cursor-not-allowed',
	{
		variants: {
			variant: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
				tertiary: 'bg-tertiary'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

/**
 * @function
 * @param {Object} variants
 */
export const button = (variants) => twMerge(buttonVariants(variants));

const buttonChildVariants = cva(
	'absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-300 ease-in-out group-enabled:group-hover:scale-105',
	{
		variants: {
			variant: {
				primary: 'bg-secondary',
				secondary: 'bg-tertiary',
				tertiary: 'bg-primary'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

/**
 * @function
 * @param {Object} variants
 */
export const buttonChild = (variants) => twMerge(buttonChildVariants(variants));
