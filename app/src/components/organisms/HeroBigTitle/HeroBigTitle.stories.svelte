<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import HeroBigTitle from './HeroBigTitle.svelte';
</script>

<Meta
	title="Organisms/HeroBigTitle"
	component="HeroBigTitle"
	argTypes={{
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary']
		}
	}}
	args={{
		variant: 'primary',
		title: 'Title',
		content: `<p>Lorem ipsum dolor <b>sit</b> amet</p>
			<p>Sit amet consectetur adipisicing elit. Reiciendis esse voluptatum non vero</p>
			`
	}}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<HeroBigTitle {...args} />
</Template>

<Story name="Default" args={{}} />
