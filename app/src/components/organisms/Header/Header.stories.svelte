<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';
</script>

<Meta
	title="Organisms/Layout/Header"
	component={Header}
	argTypes={{}}
	args={{}}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<Header {...args} />
</Template>

<Story name="Default" args={{}} />
