<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let content = '';
	/** @type {string} */
	export let variant = 'primary';
</script>

<div
	class="flex items-center justify-between gap-16 border-b-2 border-black px-16 py-10"
	class:bg-primary={variant === 'primary'}
	class:bg-secondary={variant === 'secondary'}
	class:bg-tertiary={variant === 'tertiary'}
>
	<h1 class="text-128 font-medium">{title}</h1>
	{#if content}
		<div class="text-20 max-w-md">{@html content}</div>
	{/if}
</div>
