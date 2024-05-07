<script>
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../styles.css';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Emmanuel Gatwech</title>
	<meta name="description" content="Hi, my name is Emmanuel Gatwech and I am a software developer with over four years of experience and a passion for building innovative solutions that address real-world problems." />
</svelte:head>
<header>
	<Header />
</header>
<main class="flex flex-col items-center justify-center">
	<slot />
</main>
<Footer />
