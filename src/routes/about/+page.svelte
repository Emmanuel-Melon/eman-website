<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import Card from '../../components/Card.svelte';
</script>

<div class="text-center space-y-4 mx-auto mb-4">
	<div class="text-center">
		<div class="text-gray-500">
			<iconify-icon icon="ri:apps-2-add-line" height="40" width="40" />
		</div>
		<h1 class={`text-3xl md:text-4xl lg:text-5xl font-bold mx-auto`}>The Energy Man</h1>
	</div>
</div>
<SectionWrapper>
	<div class="space-y-2 grow p-2">
		<Card>
			<p class="text-sm md:text-base">
				I am a software developer with over four years of experience and a passion for building
				innovative solutions that address real-world problems, having worked on various projects
				in various sectors.
			</p>
		</Card>
		<Card>
			<p>
				I am the founder of Sahil, a logistics platform tailored to the needs of businesses in
				emerging markets, specifically targeting those with lower digital literacy rates or
				limited access to the internet. Sahil aims to enable these businesses to manage their
				supply chain operations efficiently, bridging the gap between traditional logistics
				and modern digital platforms.
			</p>
		</Card>
		<div class="card card-compact shadow-md card-bordered w-full bg-white">
			<div class="card-body">
				<div class="text-center text-gray-500">
					<iconify-icon icon="ri:chat-1-line" height="30" width="30" class="lg:h-10 lg:w-10 mx-auto" />
					<p class="text-lg lg:text-xl text-gray-500 mt-2">Random things about me</p>
				</div>

				<div class="flex gap-2 lg:gap-4 flex-wrap justify-center">
					<div class="badge badge-sm sm:badge-md text-gray-500 shadow-xl">Startup Founder</div>
					<div class="badge badge-sm sm:badge-md text-gray-500 shadow-xl">Amateur Chef</div>
					<div class="badge badge-sm sm:badge-md text-gray-500 shadow-xl">Digital Nomad</div>
					<div class="badge badge-sm sm:badge-md text-gray-500 shadow-xl">Fragrance Connoisseur</div>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap gap-2 mt-4 lg:gap-4 items-center justify-center lg:justify-between">
			<a target="_blank" aria-label="Emmanuel Gatwech on Twitter" href="https://twitter.com/JunubiMan" class="btn btn-ghost btn-squared rounded-xl bg-white w-10 h-10 lg:w-12 lg:h-12 p-2 lg:p-3">
				<iconify-icon icon="ri:twitter-line" />
			</a>
			<a target="_blank" aria-label="Emmanuel Gatwech on LinkedIn" href="https://www.linkedin.com/in/emmanuel-gatwech/" class="btn btn-ghost btn-squared rounded-xl bg-white w-10 h-10 lg:w-12 lg:h-12 p-2 lg:p-3">
				<iconify-icon icon="ri:linkedin-line" />
			</a>
			<a target="_blank" aria-label="Emmanuel Gatwech on GitHub" href="https://github.com/Emmanuel-Melon" class="btn btn-ghost btn-squared rounded-xl bg-white w-10 h-10 lg:w-12 lg:h-12 p-2 lg:p-3">
				<iconify-icon icon="ri:github-line" />
			</a>
			<a target="_blank" aria-label="Emmanuel Gatwech on Instagram" href="https://www.instagram.com/junubiman/" class="btn btn-ghost btn-squared rounded-xl bg-white w-10 h-10 lg:w-12 lg:h-12 p-2 lg:p-3">
				<iconify-icon icon="ri:instagram-line" />
			</a>
			<a target="_blank" aria-label="Emmanuel Gatwech's Blog on Hashnde" href="https://eman.hashnode.dev/" class="btn btn-ghost btn-squared rounded-xl bg-white w-10 h-10 lg:w-12 lg:h-12 p-2 lg:p-3">
				<iconify-icon icon="ri:quill-pen-line" />
			</a>
		</div>
	</div></SectionWrapper
>
