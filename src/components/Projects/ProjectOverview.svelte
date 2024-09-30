<script>
	export let project;
	import 'iconify-icon';
	import Card from '../Card.svelte';
</script>

<Card>
	<div class="flex flex-col items-start gap-4 w-full">
		<div class="w-full mb-4">
			<img src={project.image} alt={project.title} class="w-full h-auto rounded-lg shadow-md border-2 border-gray-200" />
		</div>
		<div class="space-y-2 w-full">
			<h2 class="card-title">
				{project.title}
			</h2>
			<p class="text-gray-600 text-xs sm:text-sm">{project.description}</p>
			<div class="card-actions flex-wrap justify-end gap-2">
				<a href={project.demo} target="_blank" rel="noopener noreferrer" class="btn btn-xs sm:btn-sm btn-primary flex gap-2 items-center"
					><iconify-icon icon="ri:computer-line" /> Demo</a
				>
				<a href={project.source} target="_blank" rel="noopener noreferrer" class="btn btn-xs sm:btn-sm btn-outline flex gap-2 items-center"
					><iconify-icon icon="ri:github-line" /> Source</a
				>
			</div>
		</div>
	</div>
</Card>