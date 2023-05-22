<script>
	import Hero from '../components/Hero.svelte';
	import ProjectsList from '../components/Projects/ProjectsList.svelte';
</script>
<section>
	<Hero />
</section>
<section class="min-h-screen bg-base-200 space-y-4 p-4">
	<div class="text-center">
		<h3 class="text-3xl font-bold">Projects</h3>
	</div>
	<ProjectsList />
</section>
