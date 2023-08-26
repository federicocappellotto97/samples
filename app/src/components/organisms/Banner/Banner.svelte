<script>
	import Button from '../../atoms/Button/Button.svelte';

	/** @type {string} */
	export let title = '';
	/** @type {string} */
	export let content = '';
	/** @type {import('$lib/typedefs').Link | undefined} */
	export let link = undefined;
	/** @type {string} */
	export let linkVariant = 'primary';
</script>

<div class="px-16 py-20">
	<div class="m-auto flex max-w-lg flex-col items-center space-y-6 text-center">
		{#if title}
			<h2 class="text-72 font-medium leading-none">{title}</h2>
		{/if}
		{#if content}
			<div class="text-20">{@html content}</div>
		{/if}
		{#if link}
			<Button {...link} variant={linkVariant}>{link.label}</Button>
		{/if}
	</div>
</div>
