<script>
	import Button from '../../atoms/Button/Button.svelte';

	/** @type {string} */
	export let title;
	/** @type {any} */
	export let menu = {};
	console.log(menu);
</script>

<header class="bg-primary flex items-center border-b-2 border-black px-16 py-6">
	<img src="/logo.svg" class="h-16" alt={title} />
	{#if menu?.items}
		<ul class="ml-auto flex gap-4">
			{#each menu.items as item, i}
				{#if item?.link}
					<li>
						<Button variant="secondary" size="small">{item.link?.label}</Button>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}
</header>
