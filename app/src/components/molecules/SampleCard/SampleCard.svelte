<script>
	import Button from '../../atoms/Button/Button.svelte';
	import FaDownload from 'svelte-icons/fa/FaDownload.svelte';
	/** @type {string} */
	export let title;
	/** @type {import('$lib/typedefs').Image} */
	export let image;
	/** @type {string} */
	export let url;
	/** @type {boolean} */
	export let isOdd = true;
</script>

<div
	class="space-y-4 border-b-2 border-r-2 border-black p-8 first:border-t-0 last:border-b-0 even:border-r-0"
	class:[&:nth-last-child(2)]:border-b-0={isOdd}
>
	<div
		class="relative aspect-[1.5] w-full overflow-hidden rounded-lg border-2 border-black shadow-lg"
	>
		{#if image}
			<img
				{...image}
				alt={title || image.alt}
				class="absolute inset-0 h-full w-full object-cover"
			/>
		{/if}
	</div>
	<h3 class="text-32 font-medium">{title}</h3>
	<div class="flex items-center justify-between gap-4">
		<Button href={url}>View</Button>
		<Button variant="icon">
			<FaDownload />
		</Button>
	</div>
</div>
