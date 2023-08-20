<script>
	/** @type {string[]} */
	export let items = [];
	/** @type {number} */
	export let componentIndex = 0;
	/** @type {string} */
	export let variant = 'primary';
</script>

{#if items}
	<div
		class="grid grid-cols-1 border-b-2 border-black lg:grid-cols-2"
		class:border-t-2={componentIndex !== 0}
	>
		{#each items as item, i}
			<div
				class="text-20 lg:text-32 flex flex-col justify-center border-t-2 border-black p-8 text-center font-medium first:border-t-0 lg:p-16 lg:odd:border-r-2 lg:[&:nth-child(2)]:border-t-0"
				class:bg-primary={variant === 'primary'}
				class:bg-secondary={variant === 'secondary'}
				class:bg-tertiary={variant === 'tertiary'}
				class:bg-quarterary={variant === 'rainbow' && i % 4 === 0}
				class:bg-quinary={variant === 'rainbow' && i % 4 === 1}
				class:bg-senary={variant === 'rainbow' && i % 4 === 2}
				class:bg-setary={variant === 'rainbow' && i % 4 === 3}
				style="--tw-bg-opacity: {variant != 'rainbow' ? 1 - i * 0.15 : 1}"
			>
				{@html item}
			</div>
		{/each}
	</div>
{/if}
