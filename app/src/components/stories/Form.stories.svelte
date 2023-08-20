<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import TextInput from '../atoms/TextInput/TextInput.svelte';
	import Button from '../atoms/Button/Button.svelte';
	import RadioInput from '../atoms/RadioInput/RadioInput.svelte';
	import CheckboxInput from '../atoms/CheckboxInput/CheckboxInput.svelte';
	import Toggle from '../atoms/Toggle/Toggle.svelte';
	import Select from '../atoms/Select/Select.svelte';
	let sex = '';
	let privacy = false;
	let subscribe = false;
	let select = '';

	/**
	 * Handles form submission.
	 *
	 * @param {Event} e - The form submission event.
	 * @returns {void}
	 */
	const handleSubmit = (e) => {
		if (e.target instanceof HTMLFormElement) {
			const formData = new FormData(e.target);
			const data = Array.from(formData.entries()).map(([key, value]) => ({ [key]: value }));
			console.log(data);
		} else {
			console.error('Event target is not an HTMLFormElement.');
		}
	};
</script>

<Meta title="Stories/Form" argTypes={{}} args={{}} />

<Template>
	<form class="grid grid-cols-2 gap-8" on:submit|preventDefault={handleSubmit}>
		<TextInput
			type="text"
			name="first-name"
			id="first-name"
			label="First name"
			placeholder="John"
		/>
		<TextInput type="text" name="last-name" id="last-name" label="Last name" placeholder="Doe" />
		<TextInput type="email" name="email" id="email" label="Email" required />
		<TextInput type="password" name="password" id="password" label="Password" />
		<Select
			label="Select"
			name="select"
			required
			placeholder="Select an option"
			bind:selected={select}
		>
			<option>Lorem</option>
			<option>Ipsum</option>
		</Select>
		<div class="col-span-2 flex gap-4">
			<RadioInput label="Male" name="sex" value="male" bind:group={sex} />
			<RadioInput label="Female" name="sex" value="female" bind:group={sex} />
		</div>
		<div class="col-span-2 flex gap-4">
			<Toggle label="Subscribe" name="subscribe" bind:checked={subscribe} />
		</div>
		<div class="col-span-2 flex flex-col items-baseline gap-8">
			<CheckboxInput
				label="I agree to the terms and conditions"
				name="privacy"
				required
				bind:checked={privacy}
			/>
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Template>

<Story name="Default" args={{}} />
