<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import { customGradient } from '../../components/utils/ui';
	import Journey from '../../components/Journey.svelte';
</script>

<div class="text-center space-y-4 bg-base-200 p-4 mb-4">
	<h1 class={`text-5xl font-bold mx-auto ${customGradient()}`}>The Energy Man</h1>
</div>
<SectionWrapper>
	<div class="space-y-4 w-3/5">
		<p>
			Emmanuel Gatwech, is a software developer with over four years of experience, having worked on
			a wide range of projects in various sectors. His commitment to efficiency and problem-solving
			is evident in his work.  He is committed to advancing technology for the benefit of all.
		</p>
		<div class="flex gap-2">
			<div class="card shadow grow basis-3/6">
				<div class="card-body">
					<h3 class="card-title">Founder</h3>
					<p>Currently, he is the founder of Sahil, a comprehensive platform that
						simplifies procurement processes, connects businesses with reliable suppliers, and ensures
						swift, efficient deliveries.</p>
				</div>
			</div>
			<div class="card shadow grow basis-3/6">
				<div class="card-body">
					<h3 class="card-title">Open Sourcer</h3>
					<p>a hub for collaborative learning among developers</p>
				</div>
			</div>
		</div>
		<div class="flex gap-8 items-center">
			<div>
				<h3>Contact Me</h3>
			</div>
			<div class="flex gap-4">
				<button class="btn btn-sm btn-square btn-ghost shadow-sm">
					<iconify-icon icon="ri:linkedin-box-line" height="20" width="20"/>
				</button>
				<button class="btn btn-sm btn-square btn-ghost shadow-sm">
					<iconify-icon icon="ri:twitter-x-line" height="20" width="20" />
				</button>
				<button class="btn btn-sm btn-square btn-ghost shadow-sm">
					<iconify-icon icon="ri:github-line" height="20" width="20" />
				</button>
				<button class="btn btn-sm btn-square btn-ghost shadow-sm">
					<iconify-icon icon="fa6-brands:hashnode" height="20" width="20" />
				</button>
			</div>
		</div>
	</div>
</SectionWrapper>
