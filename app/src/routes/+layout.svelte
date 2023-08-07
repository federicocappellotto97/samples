<script>
	import '../styles/app.css';
	import Header from '../components/organisms/Header.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	const { title } = data;
</script>

<Header {title} />
<slot />
