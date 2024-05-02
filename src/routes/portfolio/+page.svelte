<script>
    	import ProjectsList from '../../components/Projects/ProjectsList.svelte';
		import SectionWrapper from '../../components/SectionWrapper.svelte';
		import { customGradient } from '../../components/utils/ui';
</script>

<div class="text-center space-y-4  w-2/5 p-4 mx-auto">
	<h1 class={`text-2xl font-bold`}>Projects</h1>
	<p>
		I thrive on solving complex challenges and finding elegant solutions that push the boundaries
		of what's possible.
	</p>
</div>
<ProjectsList />