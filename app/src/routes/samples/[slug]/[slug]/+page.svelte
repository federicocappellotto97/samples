<script>
	import FaDownload from 'svelte-icons/fa/FaDownload.svelte';
	import { fly } from 'svelte/transition';
	import Button from '../../../../components/atoms/Button/Button.svelte';
	import HeroBigTitle from '../../../../components/organisms/HeroBigTitle/HeroBigTitle.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { title, image, images, type } = data;

	/** @type {string} */
	let selected = 'hd';
</script>

<HeroBigTitle {title} {image} caption={type} variant="secondary" />
<div class="bg-tertiary space-y-8 px-16 py-10">
	<ul class="flex gap-8">
		{#each [...new Set(images.map((item) => item.resolution))] as res (res)}
			<li>
				<Button
					size="small"
					variant="quinary"
					selected={selected === res}
					handleClick={() => (selected = res)}>{res.toUpperCase()}</Button
				>
			</li>
		{/each}
	</ul>
	<ul class="flex items-center gap-8">
		{#each images.filter((item) => item.resolution === selected) as { format, size }, index (format + '-' + selected)}
			<li in:fly={{ delay: index * 150, duration: 400, x: -20, y: 20 }} class="space-y-4">
				<Button>
					<FaDownload slot="icon" />
					.{format}
				</Button>
				<p class="text-center font-medium">{size}</p>
			</li>
		{/each}
	</ul>
</div>
