<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Toggle from './Toggle.svelte';
</script>

<Meta
	title="Atoms/Toggle"
	component="Toggle"
	argTypes={{}}
	args={{
		defaultChecked: false,
		disabled: false,
		label: ''
	}}
/>

<Template let:args>
	<Toggle {...args} />
</Template>

<Story name="Default" args={{}} />
<Story
	name="Checked"
	args={{
		defaultChecked: true
	}}
/>
