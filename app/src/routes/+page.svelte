<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-4xl text-red-600">Welcome to SvelteKit {data.post.title}</h1>
<p>Visit <a href="https://kit.svelte.dev">{@html data.post.content}</a></p>
