<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import SectionGridTexts from './SectionGridTexts.svelte';
</script>

<Meta
	title="Organisms/SectionGridTexts"
	component="SectionGridTexts"
	argTypes={{
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary', 'rainbow']
		}
	}}
	args={{
		variant: 'primary',
		items: [
			'<p>Lorem ipsum dolor sit amet</p>',
			'<p>Sit amet consectetur adipisicing elit. Reiciendis esse voluptatum non vero</p>',
			'<p>Consectetur dicta praesentium <b>molestiae</b>?</p>',
			'<p>Lorem ipsum dolor sit amet</p>'
		]
	}}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<SectionGridTexts {...args} />
</Template>

<Story name="Default" args={{}} />
