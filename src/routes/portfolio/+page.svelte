<script>
    	import ProjectsList from '../../components/Projects/ProjectsList.svelte';
		import SectionWrapper from '../../components/SectionWrapper.svelte';
		import { customGradient } from '../../components/utils/ui';
</script>


<div class="text-center space-y-4 mx-auto mb-4">
	<div class="text-center">
		<div class="text-gray-500">
			<iconify-icon icon="ri:apps-2-add-line" height="40" width="40" />
		</div>
		<h1 class={`text-3xl md:text-4xl lg:text-5xl font-bold mx-auto`}>Stuff I've built</h1>
	</div>
</div>
<ProjectsList />