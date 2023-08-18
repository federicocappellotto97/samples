<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte';

	import Input from './Input.svelte';
</script>

<Meta
	title="Atoms/Input"
	component={Input}
	argTypes={{
		type: {
			control: 'radio',
			options: ['text', 'email', 'password']
		}
	}}
	args={{
		disabled: false,
		error: '',
		type: 'text',
		label: 'First name'
	}}
/>

<Template let:args>
	<div style="width: 300px">
		<Input {...args} />
	</div>
</Template>

<Story name="Default" args={{}} />

<Story name="With Icon" args={{}} let:args>
	<div style="width: 300px">
		<Input {...args}>
			<FaExclamationTriangle slot="icon" />
		</Input>
	</div>
</Story>
