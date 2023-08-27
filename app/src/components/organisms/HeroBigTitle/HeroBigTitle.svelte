<script>
	import PortableText from '@portabletext/svelte';

	/** @type {string} */
	export let title;
	/** @type {any} */
	export let content = '';
	/** @type {string} */
	export let variant = 'primary';
	/** @type {import('$lib/typedefs').Image | undefined} [image] */
	export let image = undefined;
	/** @type {string} */
	export let caption = '';
</script>

<div
	class="flex items-center justify-between gap-16 px-16 py-10"
	class:bg-primary={variant === 'primary'}
	class:bg-secondary={variant === 'secondary'}
	class:bg-tertiary={variant === 'tertiary'}
>
	<div class="space-y-8">
		{#if caption}
			<h2 class="font-semibold uppercase leading-none">{caption}</h2>
		{/if}
		<h1 class="text-128 font-medium leading-none">{title}</h1>
	</div>
	{#if content}
		<div class="text-20 max-w-md">
			<PortableText blocks={content} />
		</div>
	{/if}
	{#if image}
		<div
			class="relative aspect-[1.5] w-1/3 overflow-hidden rounded-lg border-2 border-black shadow-lg"
		>
			{#if image}
				<img
					{...image}
					alt={title || image.alt}
					class="absolute inset-0 h-full w-full object-cover"
				/>
			{/if}
		</div>
	{/if}
</div>
