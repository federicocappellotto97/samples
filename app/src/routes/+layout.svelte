<script>
	import Header from '../components/organisms/Header.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
	/** @type {import('./$types').LayoutData} */
	export let data;
	const { settings, menu } = data;
	const { title, description } = settings;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main
	class="mx-auto min-h-screen max-w-[2560px] overflow-hidden rounded-3xl border-2 border-black bg-sky-50"
>
	<Header {title} menu={menu.find((m) => m.key == 'primary')} />

	<slot />
</main>
