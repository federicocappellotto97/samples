<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Footer from './Footer.svelte';
</script>

<Meta
	title="Organisms/Layout/Footer"
	component={Footer}
	argTypes={{}}
	args={{}}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<Footer {...args} />
</Template>

<Story name="Default" args={{}} />
