<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import SampleCard from './SampleCard.svelte';
</script>

<Meta
	title="Molecules/SampleCard"
	component=SampleCard
	argTypes={{}}
	args={{}}
/>

<Template let:args>
	<SampleCard {...args} />
</Template>

<Story name="Default" args={{}} />
