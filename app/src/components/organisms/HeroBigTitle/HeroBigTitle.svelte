<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let content = '';
	/** @type {string} */
	export let variant = 'primary';
	/** @type {number} */
	export let componentIndex = 0;
</script>

<div
	class="flex items-center justify-between gap-16 border-b-2 border-black px-16 py-10"
	class:bg-primary={variant === 'primary'}
	class:bg-secondary={variant === 'secondary'}
	class:bg-tertiary={variant === 'tertiary'}
	class:border-t-2={componentIndex !== 0}
>
	<h1 class="text-128 font-medium">{title}</h1>
	{#if content}
		<div class="max-w-md">{@html content}</div>
	{/if}
</div>
