<script>
	import Footer from '../components/organisms/Footer/Footer.svelte';
	import Header from '../components/organisms/Header/Header.svelte';
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
	class="mx-auto flex min-h-screen max-w-[2560px] flex-col overflow-hidden rounded-3xl border-2 border-black bg-sky-50"
>
	<Header {title} menu={menu.find((/** @type {{ key: string; }} */ m) => m.key == 'primary')} />

	<div class="contents divide-y-2 divide-black">
		<slot />
	</div>

	<Footer {title} />
</main>
