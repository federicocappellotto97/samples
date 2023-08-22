<script>
	import Button from '../../atoms/Button/Button.svelte';
	import MenuItem from './MenuItem.svelte';

	/** @type {string} */
	export let title;
	/** @type {any} */
	export let menu = {};
</script>

<header class="bg-primary flex items-center border-b-2 border-black px-16 py-6">
	<img src="/logo.svg" class="h-16" alt={title} />
	{#if menu?.items}
		<ul class="ml-auto flex gap-4">
			{#each menu.items as item}
				{#if item?.link}
					<MenuItem level={1} {...item} />
				{/if}
			{/each}
		</ul>
	{/if}
</header>
