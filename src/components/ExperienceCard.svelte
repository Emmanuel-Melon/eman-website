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
	import Card from './Card.svelte';
</script>


<Card>
	<div class="flex flex-col sm:flex-row gap-4 items-start">
		<span class="text-secondary self-center sm:self-start">
			<iconify-icon height="30" width="30" icon="ri:building-2-line" />
		</span>
		<div class="space-y-2 w-full">
			<div class="space-y-2">
				<h3 class="card-title text-sm">{experience.title}</h3>
				<a class="link link-hover text-primary" aria-label={`Read more about ${experience.name}`} target="_blank" href={experience.url}> {experience.name}</a>
			</div>
			<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-500 gap-2">
				<div class="flex gap-2">
					<p class="flex gap-4 items-center">
						<iconify-icon icon="ri:map-pin-line" />
						{experience.location}
					</p>
				</div>
				<div>
					<p class="flex gap-4 items-center">
						<iconify-icon icon="ri:calendar-line" />
						{experience.duration}
					</p>
				</div>
			</div>
			<p class="text-sm">{experience.description}</p>
			<div class="flex flex-wrap gap-2 items-center">
				{#each experience.stack as { title }}
					<div class="badge badge-sm sm:badge-md text-gray-500 shadow-xl">{title}</div>
				{/each}
			</div>
		</div>
	</div>
</Card>
