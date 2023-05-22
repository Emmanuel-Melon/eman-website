<script>
	export let project;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">
			{project.title}
			<div class="badge badge-secondary">NEW</div>
		</h2>
		<p>{project.description}</p>
		<div class="card-actions justify-start">
            <button class="btn btn-sm btn-outline">Demo</button>
            <button class="btn btn-sm">Source</button>
		</div>
	</div>
    <figure><img src={project.image} alt="Shoes" /></figure>
</div>
