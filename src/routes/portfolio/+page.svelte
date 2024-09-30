<script>
	import ProjectsList from '../../components/Projects/ProjectsList.svelte';
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import Card from '../../components/Card.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>


{#if visible}
	<div class="text-center space-y-4 mx-auto mb-4" in:fade={{ duration: 300, delay: 150 }}>
		<div class="text-center">
			<div class="text-gray-500" in:fly={{ y: 20, duration: 300, delay: 300 }}>
				<iconify-icon icon="ri:apps-2-add-line" height="40" width="40" />
			</div>
			<h1 class={`text-3xl md:text-4xl lg:text-5xl font-bold mx-auto`}>Stuff I've built</h1>
			<div class="divider ">Projects</div>
		</div>
	</div>
{/if}

<ProjectsList />
