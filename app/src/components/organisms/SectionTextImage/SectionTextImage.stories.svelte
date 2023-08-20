<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import SectionTextImage from './SectionTextImage.svelte';
</script>

<Meta
	title="Organisms/SectionTextImage"
	component="SectionTextImage"
	argTypes={{
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary']
		}
	}}
	args={{
		variant: 'primary',
		title: 'Title',
		content: `<p>Lorem ipsum dolor <b>sit</b> amet</p>`,
		link: {
			label: 'Link',
			href: '#',
			target: '_blank'
		},
		image: {
			src: 'https://img.freepik.com/premium-vector/abstract-shapes-background-neo-brutalist-wave-design-wavy-banner-retro-brutalist-style_757611-811.jpg?w=2000',
			alt: 'Image'
		}
	}}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<SectionTextImage {...args} />
</Template>

<Story name="Default" args={{}} />
