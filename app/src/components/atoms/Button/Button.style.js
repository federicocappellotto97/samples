import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
	'inline-block rounded-full border border-black bg-gradient-to-t px-8 py-4 leading-none tracking-widest transition-all duration-200 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2',
	{
		variants: {
			variant: {
				primary: 'from-logo-gradients-primary-from to-logo-gradients-primary-to',
				secondary: 'from-logo-gradients-secondary-from via-logo-gradients-secondary-via to-logo-gradients-secondary-to',
				tertiary: 'bg-logo-gradients-tertiary text-white'
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

const buttonChildOneVariants = cva(
	'absolute left-0 top-0 -z-10 h-full w-full rounded-full border border-black transition-all duration-200 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 bg-logo-secondary',
);

/**
 * @function
 */
export const buttonChildOne = () => twMerge(buttonChildOneVariants());

const buttonChildTwoVariants = cva(
	'absolute left-0 top-0 -z-20 h-full w-full rounded-full border border-black bg-logo-tertiary',
);

/**
 * @function
 */
export const buttonChildTwo = () => twMerge(buttonChildTwoVariants());
