<script>
	import SampleCard from '../../../components/molecules/SampleCard/SampleCard.svelte';
	import HeroBigTitle from '../../../components/organisms/HeroBigTitle/HeroBigTitle.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const { title, content, items } = data;
	console.log(items);
</script>

<HeroBigTitle variant="secondary" {title} {content} />
{#if items}
	<div class="bg-tertiary grid grid-cols-2">
		{#each items as { title, slug, preview, type }}
			<SampleCard
				{title}
				image={{ src: preview?.asset?.url, alt: title }}
				url={'/samples/' + type.slug + '/' + slug}
			/>
		{/each}
	</div>
{/if}
