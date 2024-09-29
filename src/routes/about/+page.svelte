<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import { customGradient } from '../../components/utils/ui';
	import Journey from '../../components/Journey.svelte';
</script>

<div class="text-center space-y-4 p-4 mb-4">
	<h1 class={`text-3xl md:text-4xl lg:text-5xl font-bold mx-auto`}>The Energy Man</h1>
</div>
<SectionWrapper>
	<div class="space-y-4 grow p-8">
		<div class="flex flex-col md:flex-row gap-2">
			<p class="text-sm md:text-base">I am a software developer with over four years of experience and a passion for building innovative solutions that address real-world problems, having worked on various projects in various sectors. I am the founder of Sahil, a logistics platform tailored to the needs of businesses in emerging markets, specifically targeting those with lower digital literacy rates or limited access to the internet. Sahil aims to enable these businesses to manage their supply chain operations efficiently, bridging the gap between traditional logistics and modern digital platforms.</p>
		</div>
		<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
			<div>
				<h3 class="text-lg md:text-xl font-semibold">Contact Me</h3>
			</div>
			<div class="flex gap-2 sm:gap-4">
				<button class="btn btn-xs sm:btn-sm btn-square btn-ghost shadow-xl-sm">
					<iconify-icon icon="ri:linkedin-box-line" height="16" width="16" class="sm:h-5 sm:w-5"/>
				</button>
				<button class="btn btn-xs sm:btn-sm btn-square btn-ghost shadow-xl-sm">
					<iconify-icon icon="ri:twitter-x-line" height="16" width="16" class="sm:h-5 sm:w-5" />
				</button>
				<button class="btn btn-xs sm:btn-sm btn-square btn-ghost shadow-xl-sm">
					<iconify-icon icon="ri:github-line" height="16" width="16" class="sm:h-5 sm:w-5" />
				</button>
				<button class="btn btn-xs sm:btn-sm btn-square btn-ghost shadow-xl-sm">
					<iconify-icon icon="fa6-brands:hashnode" height="16" width="16" class="sm:h-5 sm:w-5" />
				</button>
			</div>
		</div>
	</div>
</SectionWrapper>
