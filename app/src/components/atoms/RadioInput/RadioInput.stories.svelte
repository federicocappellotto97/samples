<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import RadioInput from './RadioInput.svelte';
</script>

<Meta
	title="Atoms/Input/Radio"
	component="RadioInput"
	argTypes={{}}
	args={{
		disabled: false,
		label: '',
		value: 'unchecked',
		error: ''
	}}
/>

<Template let:args>
	<RadioInput {...args} />
</Template>

<Story name="Default" args={{}} />

<Story
	name="Checked"
	args={{
		value: 'checked',
		group: 'checked'
	}}
/>
