<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
</script>

<Meta
	title="Atoms/Button"
	component={Button}
	argTypes={{
		label: { control: 'text', if: { arg: 'variant', neq: 'icon' } },
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary', 'icon']
		},
		size: {
			control: 'radio',
			options: ['small', 'medium']
		},
		handleClick: {
			table: {
				disable: true
			}
		},
		classes: {
			table: {
				disable: true
			}
		}
	}}
	args={{
		label: 'Button',
		disabled: false,
		size: 'medium'
	}}
/>

<Template let:args>
	<Button {...args}>{args.label}</Button>
</Template>

<Story name="Primary" args={{ variant: 'primary' }} />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Tertiary" args={{ variant: 'tertiary' }} />

<Story name="Icon" args={{ variant: 'icon' }} let:args>
	<Button {...args}>
		<IoIosClose />
	</Button>
</Story>
