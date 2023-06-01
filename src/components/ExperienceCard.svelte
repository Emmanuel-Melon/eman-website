<script lang="ts">
	import 'iconify-icon';
	type TechStack = {
		title: string;
	};

	type Experience = {
		description: string;
		duration: string;
		name: string;
		stack: TechStack[];
		title: string;
		url: string;
		location: string;
		roles: String[];
	};
	export let experience: Experience;
</script>

<div class="card rounded-none lg:card-side bg-base-100 shadow">
	<div class="card-body">
		<div class="flex items-center gap-2">
			<h2 class="card-title text-2xl">{experience.title}</h2>
			<div class="badge badge-lg">{experience.duration}</div>
		</div>
		<h3 class="text-primary">
			<a class="link link-hover" href={experience.url}>{experience.name}</a> <span class="text-neutral-focus"> - {experience.location}</span>
		</h3>
		<p>{experience.description}</p>
		<div class="divider">Tech Stack</div>
		<div class="flex gap-2 items-center">
			{#each experience.stack as { title }}
				<div class="badge badge-lg badge-outline">{title}</div>
			{/each}
		</div>
	</div>
</div>
