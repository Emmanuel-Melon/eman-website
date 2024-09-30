<script lang="ts">
	import '../styles.css';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	// apply to header: fixed top-0 left-0 right-0 z-50
</script>

<svelte:head>
	<title>Emmanuel Gatwech</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta
		name="description"
		content="Hi, my name is Emmanuel Gatwech and I am a software developer from South Sudan. I am the founder of Sahil."
	/>
	<meta name="author" content="Emmanuel Gatwech">
	<meta name="keywords" content="software developer, South Sudan, innovative solutions, real-world problems">
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.emmanuelgatwech.com/">
	<meta property="og:title" content="Emmanuel Gatwech - Software Developer">
	<meta property="og:description" content="Software developer from South Sudan with over four years of experience, passionate about building innovative solutions.">
	<meta property="og:image" content="https://www.emmanuelgatwech.com/og-image.jpg">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://www.emmanuelgatwech.com/">
	<meta property="twitter:title" content="Emmanuel Gatwech - Software Developer">
	<meta property="twitter:description" content="Software developer from South Sudan with over four years of experience, passionate about building innovative solutions.">
	<meta property="twitter:image" content="https://www.emmanuelgatwech.com/twitter-image.jpg">

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.ico">

	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.emmanuelgatwech.com/">
</svelte:head>
<header class="p-2">
	<Header />
</header>
<main class="flex flex-col items-center justify-center">
	<slot />
</main>
<Footer />
