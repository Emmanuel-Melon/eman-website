<script>

// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
// NOTE: this will be renamed skeleton.css in the v2.x release.
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')

	import '../app.css';
</script>

<svelte:head>
  <title>Eman</title>
  <meta
    name="description"
    content="Emmanuel Gatwech"
  />
</svelte:head>
<header>
	<ul>
		<li>About</li>
		<li>Experience</li>
		<li>Projects</li>
		<li>Open Source</li>
	</ul>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Eman 2023</p>
</footer>