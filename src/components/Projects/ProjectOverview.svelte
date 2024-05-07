<script>
	export let project;
	import 'iconify-icon';
	import cover from '$lib/images/cover.png';

	/**
	 * 	
	*/
</script>

<div class="card lg:card-side bg-base-200 shadow-xl">

	<div class="card-body bg-base-100">
		<div class="flex items-start gap-4">
			<div class="text-gray-500">
				<iconify-icon icon="ri:code-s-slash-line" height="40" width="40"/> 
			</div>
			<div class="space-y-2">
				<h2 class="card-title text-sm">
					{project.title}
				</h2>
				<p class="text-gray-600">{project.description}</p>
				<div class="card-actions flex-start gap-2">
					<a href={project.demo} target="blank" class="btn btn-sm btn-primary flex gap-2 items-center"
						><iconify-icon icon="ri:computer-line" /> Demo</a
					>
					<a href={project.source} target="blank" class="btn btn-sm btn-outline flex gap-2 items-center"
						><iconify-icon icon="ri:github-line" /> Source</a
					>
				</div>
			</div>
		</div>
	</div>
	
</div>
