import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
	'border-2 inline-block overflow-hidden relative border-black font-semibold leading-none tracking-widest transition-all duration-200 ease-out group/button disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none',
	{
		variants: {
			variant: {
				primary: 'bg-primary rounded-lg',
				secondary: 'bg-secondary rounded-lg',
				tertiary: 'bg-tertiary rounded-lg',
				icon: 'aspect-square rounded-full bg-primary' //set shadow-md after merge
			},
			pressed: {
				true: '',
				false: ''
			},
			size: {
				small: '',
				medium: ''
			}
		},
		compoundVariants: [
			{
				size: 'medium',
				variant: ['primary', 'secondary', 'tertiary'],
				pressed: false,
				class: 'shadow-lg'
			},
			{
				size: 'medium',
				variant: ['primary', 'secondary', 'tertiary'],
				pressed: true,
				class: 'translate-x-[4px] translate-y-[6px]'
			},
			{
				size: 'small',
				variant: ['primary', 'secondary', 'tertiary'],
				pressed: false,
				class: 'shadow-md'
			},
			{
				size: 'small',
				variant: ['primary', 'secondary', 'tertiary'],
				pressed: true,
				class: 'translate-x-[2px] translate-y-[4px]'
			},
			{
				size: 'small',
				variant: ['primary', 'secondary', 'tertiary'],
				class: 'text-14 py-2 px-4'
			},
			{
				size: 'medium',
				variant: ['primary', 'secondary', 'tertiary'],
				class: 'text-16 py-4 px-8'
			},
			{
				size: 'medium',
				variant: 'icon',
				class: 'w-10 p-2'
			},
			{
				size: 'medium',
				variant: 'icon',
				pressed: false,
				class: 'shadow-md'
			},
			{
				size: 'medium',
				variant: 'icon',
				pressed: true,
				class: 'translate-x-[2px] translate-y-[4px]'
			},
			{
				size: 'small',
				variant: 'icon',
				class: 'w-6'
			},
			{
				size: 'small',
				variant: 'icon',
				pressed: false,
				class: 'shadow-sm'
			},
			{
				size: 'small',
				variant: 'icon',
				pressed: true,
				class: 'translate-x-[1px] translate-y-[2px]'
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
	'absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-300 ease-out sh:nd:group-hover/button:scale-105',
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
