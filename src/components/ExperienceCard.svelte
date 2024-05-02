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

<div class="card lg:card-side bg-base-100 shadow">
	<div class="card-body">
		<div class="flex gap-4 items-center">
			<iconify-icon icon="ri:briefcase-line" />
			<div>
				<div class="flex justify-between items-center">
					<h3 class="card-title text-sm">{experience.title}</h3>
				</div>
		
			</div>
		</div>
		
		<div class="space-y-2">
			<a class="link link-hover text-gray-500" href={experience.url}
			> {experience.name}</a
		>
			<div class="flex gap-2">
				<p>{experience.location}</p>
			</div>
			<div>
				<p>{experience.duration}</p>
			</div>
		</div>

		<div class="flex gap-2 items-center">
			{#each experience.stack as { title }}
				<div class="badge badge-lg badge-outline">{title}</div>
			{/each}
		</div>
	</div>
</div>
