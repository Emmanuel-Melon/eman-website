<script>
	export let project;
	import 'iconify-icon';
	import Card from '../Card.svelte';
</script>

<Card>
	<div class="flex flex-col sm:flex-row items-start gap-4 w-full">
		<div class="mb-2 sm:mb-0">
			<iconify-icon icon="ri:code-s-slash-line" height="30" width="30"/> 
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