<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Select from './Select.svelte';
</script>

<Meta
	title="Atoms/Input/Select"
	component="Select"
	argTypes={{}}
	args={{
		placeholder: 'Select an option',
		error: '',
		required: true,
		label: 'Select'
	}}
/>

<Template let:args>
	<Select {...args} />
</Template>

<Story name="Default" args={{}} let:args>
	<div style="width: 300px;">
		<Select {...args}>
			<option>Lorem</option>
			<option>Ipsum</option>
		</Select>
	</div>
</Story>
