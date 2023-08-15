<script>
	import Header from '../components/organisms/Header.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
	/** @type {import('./$types').LayoutData} */
	export let data;
	const { title, description } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Header {title} />

<slot />
