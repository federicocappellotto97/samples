<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import CheckboxInput from './CheckboxInput.svelte';
</script>

<Meta
	title="Atoms/Input/Checkbox"
	component="CheckboxInput"
	argTypes={{}}
	args={{
		defaultChecked: false,
		disabled: false,
		label: ''
	}}
/>

<Template let:args>
	<CheckboxInput {...args} />
</Template>

<Story name="Default" args={{}} />

<Story
	name="Checked"
	args={{
		defaultChecked: true
	}}
/>
