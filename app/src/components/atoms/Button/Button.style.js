import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
	'border-2 inline-block overflow-hidden relative border-black font-semibold leading-none tracking-widest transition-all duration-200 ease-out group disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none',
	{
		variants: {
			variant: {
				primary: 'bg-primary py-4 px-8 rounded-lg',
				secondary: 'bg-secondary py-4 px-8 rounded-lg',
				tertiary: 'bg-tertiary py-4 px-8 rounded-lg',
				icon: 'w-10 aspect-square rounded-full p-1 bg-primary' //set shadow-md after merge
			},
			pressed: {
				true: 'translate-x-[4px] translate-y-[6px]',
				false: 'shadow-lg'
			}
		},
		defaultVariants: {
			variant: 'primary',
			pressed: false
		}
	}
);

/**
 * @function
 * @param {Object} variants
 */
export const button = (variants) => twMerge(buttonVariants(variants));

const buttonChildVariants = cva(
	'absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-300 ease-out group-enabled:group-hover:scale-105',
	{
		variants: {
			variant: {
				primary: 'bg-secondary',
				secondary: 'bg-tertiary',
				tertiary: 'bg-primary',
				icon: 'bg-secondary'
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
