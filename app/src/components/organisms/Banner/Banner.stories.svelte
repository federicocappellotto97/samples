<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Banner from './Banner.svelte';
</script>

<Meta
	title="Organisms/Banner"
	component="Banner"
	argTypes={{
		linkVariant: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary']
		}
	}}
	args={{
		title: 'Title',
		content: `<p>Lorem ipsum dolor sit amet</p>`,
		link: {
			label: 'Link',
			href: '#'
		},
		linkVariant: 'primary'
	}}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<Banner {...args} />
</Template>

<Story name="Default" args={{}} />
