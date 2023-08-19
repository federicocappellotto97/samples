<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import CheckboxInput from './CheckboxInput.svelte';
</script>

<Meta
	title="Atoms/Input/Checkbox"
	component="CheckboxInput"
	argTypes={{}}
	args={{
		checked: false,
		disabled: false,
		label: '',
		error: ''
	}}
/>

<Template let:args>
	<CheckboxInput {...args} />
</Template>

<Story name="Default" args={{}} />

<Story
	name="Checked"
	args={{
		checked: true
	}}
/>
