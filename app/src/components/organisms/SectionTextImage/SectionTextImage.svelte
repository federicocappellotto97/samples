<script>
	import Button from '../../atoms/Button/Button.svelte';

	/** @type {string} */
	export let title = '';
	/** @type {string} */
	export let content = '';
	/** @type {import('$lib/typedefs').Link} */
	export let link;
	/** @type {string} */
	export let variant = 'primary';
	/** @type {number} */
	export let componentIndex = 0;
	/** @type {import('$lib/typedefs').Image | undefined} [image] */
	export let image = undefined;
	/** @type {boolean} */
	export let reverse = false;
</script>

<div
	class="grid grid-cols-2 border-b-2 border-black"
	class:border-t-2={componentIndex !== 0}
	class:bg-primary={variant === 'primary'}
	class:bg-secondary={variant === 'secondary'}
	class:bg-tertiary={variant === 'tertiary'}
>
	<div
		class="flex flex-col items-baseline justify-center space-y-6 p-16"
		class:border-r-2={!reverse}
		class:border-black={!reverse}
	>
		{#if title}
			<svelte:element
				this={componentIndex === 0 ? 'h1' : 'h2'}
				class="text-96 font-medium leading-tight"
			>
				{title}
			</svelte:element>
		{/if}
		{#if content}
			<div class="text-20">{@html content}</div>
		{/if}
		{#if link}
			{@const linkVariant =
				variant == 'primary' ? 'secondary' : variant == 'secondary' ? 'tertiary' : 'primary'}

			<Button {...link} variant={linkVariant}>{link.label}</Button>
		{/if}
	</div>
	<div
		class="relative aspect-square"
		class:border-r-2={reverse}
		class:border-black={reverse}
		class:order-first={reverse}
	>
		{#if image}
			<img
				{...image}
				alt={title || image.alt}
				class="absolute left-0 top-0 h-full w-full object-cover"
			/>
		{/if}
	</div>
</div>
