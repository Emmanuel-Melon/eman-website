<script>
    	import ProjectsList from '../../components/Projects/ProjectsList.svelte';
		import SectionWrapper from '../../components/SectionWrapper.svelte';
		import { customGradient } from '../../components/utils/ui';
</script>


<div class="text-center space-y-4  w-2/5 p-4 mx-auto">
	<div class="text-center">
		<div class="text-gray-500">
			<iconify-icon icon="ri:apps-2-add-line" height="40" width="40" />
			<p>Experience Section</p>
		</div>
		<h1 class={`text-2xl font-bold`}>Stuff I've built</h1>
	</div>

</div>
<ProjectsList />