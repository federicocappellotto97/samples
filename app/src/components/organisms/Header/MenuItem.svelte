<script>
	import Button from '../../atoms/Button/Button.svelte';

	/** @type {import('$lib/typedefs').Link} */
	export let link;
	/** @type {any[]} */
	export let children = [];
	/** @type {number} */
	export let level = 1;
</script>

<li class="group relative">
	<Button
		variant={level === 1 ? 'secondary' : 'tertiary'}
		size="small"
		href={link?.href}
		target={link?.target}
		classes="text-18 px-8"
		>{link?.label}
	</Button>
	{#if children}
		<span
			class="pointer-events-none absolute inset-x-0 top-full inline-block h-4 opacity-0 group-hover:pointer-events-auto"
		></span>
		<ul
			class="bg-secondary invisible absolute right-0 top-[calc(100%+1rem)] w-max space-y-4 rounded-lg border-2 border-black p-4 opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100"
		>
			{#each children as child}
				<svelte:self {...child} level={level + 1} />
			{/each}
		</ul>
	{/if}
</li>
