<script>
	export let project;
	import 'iconify-icon';
	import cover from '$lib/images/cover.png';

	/**
	 * 	
	*/
</script>

<div class="card lg:card-side bg-base-100 shadow rounded-none">

	<div class="card-body bg-base-100">
		<div class="flex items-center justify-between">
			<h2 class="card-title text-primary text-xl">
				{project.title}
			</h2>
			<div class="flex justify-center items-center gap-2">
				<button class="btn btn-sm btn-outline flex gap-2 items-center"
					><iconify-icon icon="ri:computer-line" /> Demo</button
				>
				<button class="btn btn-sm flex gap-2 items-center"
					><iconify-icon icon="ri:code-s-slash-line" /> Source</button
				>
			</div>
		</div>
		<p>{project.description}</p>
	</div>
	
</div>
