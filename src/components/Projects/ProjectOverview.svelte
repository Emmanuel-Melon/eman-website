<script>
	export let project;
	import 'iconify-icon';
	import cover from '$lib/images/cover.png';
</script>

<div class="card w-2/5 bg-base-100 shadow-xl rounded-none">
	<figure>
		<img alt="Shoes" class="border-4 grow border-secondary border-double" src={cover} />
	</figure>
	<div class="card-body bg-base-200">
		<div class="flex items-center justify-between">
			<h2 class="card-title text-primary">
				{project.title}
			</h2>
		</div>
		<p>{project.description}</p>
		<div class="divider">Showcase</div>
		<div class="flex justify-center items-center gap-2">
			<button class="btn btn-sm btn-outline flex gap-2 items-center"
				><iconify-icon icon="ri:computer-line" /> Demo</button
			>
			<button class="btn btn-sm flex gap-2 items-center"
				><iconify-icon icon="ri:code-s-slash-line" /> Source</button
			>
		</div>
	</div>
</div>
