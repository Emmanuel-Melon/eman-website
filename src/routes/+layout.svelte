<script>
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../styles.css';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Eman</title>
	<meta name="description" content="Emmanuel Gatwech" />
</svelte:head>
<header>
	<Header />
</header>
<main class="flex flex-col items-center justify-center">
	<slot />
</main>
<Footer />
