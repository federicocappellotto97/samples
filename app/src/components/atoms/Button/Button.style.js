import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
	'border-2 inline-block overflow-hidden relative rounded-lg border-black font-semibold leading-none tracking-widest transition-all duration-200 ease-out group disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none',
	{
		variants: {
			variant: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
				tertiary: 'bg-tertiary'
			},
			pressed: {
				true: '',
				false: ''
			},
			size: {
				small: 'text-14 py-2 px-4',
				medium: 'text-16 py-4 px-8'
			}
		},
		compoundVariants: [
			{
				size: 'medium',
				pressed: false,
				class: 'shadow-lg'
			},
			{
				size: 'medium',
				pressed: true,
				class: 'translate-x-[4px] translate-y-[6px]'
			},
			{
				size: 'small',
				pressed: false,
				class: 'shadow-md'
			},
			{
				size: 'small',
				pressed: true,
				class: 'translate-x-[2px] translate-y-[4px]'
			}
		],
		defaultVariants: {
			variant: 'primary',
			pressed: false,
			size: 'medium'
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
