<script>
	import '../styles/app.css';
	/** @type {import('./$types').LayoutData} */
	export let data;

	console.log(data);
</script>

<a href="/">Llllf</a>
	import Header from '../components/organisms/Header.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	const { title } = data;
</script>

<Header {title} />
<slot />
