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
		<span class="bg-gray-50 w-fit p-2 h-fit">
			<iconify-icon icon="ri:briefcase-line" />
		</span>
		<div class="flex justify-between items-center">
			<h3 class="card-title text-xl text-primary">{experience.title}</h3>
		</div>
		<div class="flex justify-between items-center text-accent">
			<div class="flex gap-2">
				<a class="link link-hover gap-4" href={experience.url}
					> {experience.name}</a
				>
				<p>Kigali, Rwanda</p>
			</div>
			<div>
				<p>2012 - 2017</p>
			</div>
		</div>
		<p>{experience.description}</p>
		<div class="flex gap-2 items-center">
			{#each experience.stack as { title }}
				<div class="badge badge-lg badge-outline">{title}</div>
			{/each}
		</div>
	</div>
</div>
