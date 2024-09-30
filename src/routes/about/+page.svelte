<script>
	import 'iconify-icon';
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import Card from '../../components/Card.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});
	import SocialLinks from '../../components/SocialLinks.svelte';
</script>

{#if visible}
	<div class="text-center space-y-4 mx-auto mb-4" in:fade={{ duration: 300, delay: 150 }}>
		<div class="text-center">
			<div class="text-gray-500" in:fly={{ y: 20, duration: 300, delay: 300 }}>
				<iconify-icon icon="ri:plug-2-line" height="40" width="40" />
			</div>
			<h1
				class={`text-3xl md:text-4xl lg:text-5xl font-bold mx-auto`}
				in:fly={{ y: 20, duration: 300, delay: 450 }}
			>
				The Energy Man
			</h1>
			<div class="divider">Eman</div>
		</div>
	</div>
{/if}
<SectionWrapper>
	<div class="space-y-2 grow p-2">
		<Card>
			<div class="flex flex-col sm:flex-row gap-4 items-start">
				<span class="self-center sm:self-start">
					<iconify-icon height="30" width="30" icon="ri:star-line" />
				</span>
				<p class="text-sm md:text-base">
					I am a software developer with over four years of experience and a passion for building
					innovative solutions that address real-world problems, having worked on various projects
					in various sectors.
				</p>
			</div>
		</Card>
		<Card>
			<div class="flex flex-col sm:flex-row gap-4 items-start">
			<span class="self-center sm:self-start">
				<iconify-icon height="30" width="30" icon="ri:star-line" />
			</span>
			<p>
				I am the founder of Sahil, a logistics platform tailored to the needs of businesses in
				emerging markets, specifically targeting those with lower digital literacy rates or limited
				access to the internet. Sahil aims to enable these businesses to manage their supply chain
				operations efficiently, bridging the gap between traditional logistics and modern digital
				platforms.
				</p>
			</div>
		</Card>
		<div class="card card-compact shadow-md card-bordered w-full bg-white">
			<div class="card-body space-y-2">
				<div class="text-center">
					<iconify-icon
						icon="ri:chat-1-line"
						height="30"
						width="30"
						class="lg:h-10 lg:w-10 mx-auto"
					/>
					<p class="text-lg lg:text-xl text-gray-500 mt-2">Random things about me</p>
				</div>
				<div class="flex gap-2 lg:gap-4 flex-wrap justify-center">
					<div class="badge badge-lg text-gray-500 shadow-md py-2  text-primary">Startup Founder</div>
					<div class="badge badge-lg text-gray-500 shadow-md py-2  text-primary">Amateur Chef</div>
					<div class="badge badge-lg text-gray-500 shadow-md py-2  text-primary">Digital Nomad</div>
					<div class="badge badge-lg text-gray-500 shadow-md py-2  text-primary">Fragrance Connoisseur</div>
				</div>
			</div>
		</div>
		<SocialLinks />
	</div>
</SectionWrapper>
