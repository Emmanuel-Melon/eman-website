<script>
	import 'iconify-icon';
	import Card from './Card.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
<div class="hero" in:fade={{ duration: 1000 }}>
	<div class="hero-content backdrop-blur-lg">
		<div class="grow flex flex-col lg:flex-row gap-4 p-2 lg:p-8 mx-auto">
			<div class="card w-full lg:w-96 h-fit relative p-2" in:fly={{ y: 50, duration: 400, delay: 300 }}>
				<div
					class="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-lg"
				/>
				<div class="card bg-white relative z-10 shadow-xl card-bordered border-primary border-2">
					<div class="card-body flex flex-col items-center sm:items-start space-y-2">
						<div class="avatar flex justify-center sm:justify-start w-full">
							<div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
								<img
									src="https://avatars.githubusercontent.com/u/21015204?v=4"
									alt="A headshot of Emmanuel Gatwech"
								/>
							</div>
						</div>
						<h3 class="card-title text-xl lg:text-2xl text-center sm:text-left">
							Hi, there!
						</h3>
						<p class="text-sm lg:text-base text-center sm:text-left">
							I want to use technology to make life better for everyone. I believe in fairness and
							using new ideas for good!
						</p>
						<p class="text-gray-500 text-sm lg:text-base text-center sm:text-left">
							Currently working at <span class="text-xl font-bold"
								><a href="https://thepack.tech/" target="_blank">Pack</a></span
							>
						</p>
					</div>
				</div>
			</div>
			<div class="space-y-4 w-full lg:w-80" in:fly={{ y: 50, duration: 1000, delay: 600 }}>
				<div class="card shadow-md card-bordered bg-white">
					<div class="card-body">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-lg lg:text-xl text-gray-500">What I do?</p>
								<h3 class="card-title text-base lg:text-lg">FullStack Engineer</h3>
							</div>
							<div>
								<iconify-icon
									icon="ri:computer-line"
									height="30"
									width="30"
									class="lg:h-10 lg:w-10"
								/>
							</div>
						</div>
					</div>
				</div>
				<SocialLinks />
				<div class="card shadow-md card-bordered bg-white">
					<div class="card-body">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-gray-500 text-lg lg:text-xl">Based in</p>
								<h3 class="card-title text-base lg:text-lg">Kigali, Rwanda</h3>
							</div>
							<div>
								<iconify-icon
									icon="ri:map-pin-line"
									height="30"
									width="30"
									class="lg:h-10 lg:w-10"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}
