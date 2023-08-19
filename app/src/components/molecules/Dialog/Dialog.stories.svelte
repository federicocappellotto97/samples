<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Dialog from './Dialog.svelte';
	import Button from '../../atoms/Button/Button.svelte';
	let showModal = false;
</script>

<Meta title="Molecules/Dialog" component="Dialog" argTypes={{}} args={{}} />

<Template let:args>
	<Dialog {...args} />
</Template>

<Template>
	<Button
		handleClick={() => {
			showModal = true;
		}}>show modal</Button
	>

	<Dialog bind:showModal classes="space-y-4">
		<h2 class="text-24 font-bold">Title</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis esse voluptatum non vero
			consectetur dicta praesentium molestiae, commodi explicabo ipsa nemo doloremque ex sequi
			reprehenderit, mollitia ut impedit id ducimus?
		</p>
	</Dialog>
</Template>

<Story name="Default" args={{}} />
