<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';
</script>

<Meta
	title="Atoms/Button"
	component={Button}
	argTypes={{
		label: { control: 'text' },
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary']
		},
		handleClick: {
			table: {
				disable: true
			}
		}
	}}
	args={{
		label: 'Button',
		disabled: false
	}}
/>

<Template let:args>
	<Button {...args}>{args.label}</Button>
</Template>

<Story name="Primary" args={{ variant: 'primary' }} />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Tertiary" args={{ variant: 'tertiary' }} />
