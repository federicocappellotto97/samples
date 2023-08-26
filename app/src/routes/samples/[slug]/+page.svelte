<script>
	import SampleCard from '../../../components/molecules/SampleCard/SampleCard.svelte';
	import HeroBigTitle from '../../../components/organisms/HeroBigTitle/HeroBigTitle.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { title, content, items } = data;
</script>

<HeroBigTitle variant="secondary" {title} {content} />
{#if items}
	<div class="bg-tertiary grid grid-cols-2">
		{#each items as item}
			<SampleCard {...item} />
		{/each}
	</div>
{/if}
