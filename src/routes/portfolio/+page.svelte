<script>
    	import ProjectsList from '../../components/Projects/ProjectsList.svelte';
		import SectionWrapper from '../../components/SectionWrapper.svelte';
		import { customGradient } from '../../components/utils/ui';
</script>

<div class="text-center space-y-4 bg-base-200 p-4">
	<h1 class={`text-5xl font-bold mx-auto ${customGradient()}`}>Projects</h1>
	<p>
		I thrive on solving complex challenges and finding elegant solutions that push the boundaries
		of what's possible.
	</p>
</div>
<SectionWrapper>
	<ProjectsList />
</SectionWrapper>