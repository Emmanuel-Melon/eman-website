<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import { customGradient } from './utils/ui';
	import 'iconify-icon';
	const links = [
		{
			icon: 'ri:linkedin-box-line',
			path: 'https://www.linkedin.com/in/emmanuel-gatwech/',
			title: 'LinkedIn'
		},
		{
			icon: 'ri:github-line',
			path: 'https://github.com/Emmanuel-Melon',
			title: 'GitHub'
		},
		{
			icon: 'fa6-brands:hashnode',
			path: 'https://eman.hashnode.dev/',
			title: 'Hashnode'
		},
		{
			icon: 'ri:stack-overflow-line',
			path: 'https://stackoverflow.com/users/6583352/emmanuel-gabriel',
			title: 'Stack Overflow'
		}
	];

	const interests = [
		{
			name: 'Open Source',
			icon: 'ri:open-source-line'
		},
		{
			name: 'Technical Writing',
			icon: 'ri:article-line'
		},
		{
			name: 'Mentoring',
			icon: 'ri:graduation-cap-line'
		}
	];
</script>

<div class="hero">
	<div class="hero-content backdrop-blur-lg">
		<div class="grow flex gap-4 p-8 mx-auto">
			<div class="card card-compact shadow card-bordered w-80">
				<div class="card-body">
					<div class="avatar">
						<div class="w-24 rounded-full">
							<img src="https://avatars.githubusercontent.com/u/21015204?v=4" />
						</div>
					</div>
					<h1 class={`card-title text-2xl`}>Hi, I’m Emmanuel Gatwech!</h1>
					<p>
						I want to use technology to make life better for everyone. I believe in fairness and
						using new ideas for good!
					</p>
					<p class="text-gray-500">Currently working at <span class="text-primary"><a href="https://thepack.tech/" target="_blank">Pack</a></span></p>
				</div>
			</div>
			<div class="space-y-2">
				<div class="card card-compact shadow card-bordered w-80">
					<div class="card-body">
						<p class="text-xl text-gray-500">What I do?</p>
						<div class="flex items-center justify-between">
							<h3 class={`card-title`}>FullStack Engineer</h3>
							<div>
								<iconify-icon icon="ri:computer-line" />
							</div>
						</div>
					</div>
				</div>
				<div class="flex gap-4 items-center justify-between">
					<a target="_blank" href="https://twitter.com/JunubiMan" class="shadow btn btn-squared rounded-xl w-fit p-4 h-fit">
						<iconify-icon icon="ri:twitter-line" />
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/emmanuel-gatwech/" class="shadow btn btn-squared rounded-xl w-fit p-4 h-fit">
						<iconify-icon icon="ri:linkedin-line" />
					</a>
					<a target="_blank" href="https://github.com/Emmanuel-Melon" class="shadow btn btn-squared rounded-xl w-fit p-4 h-fit">
						<iconify-icon icon="ri:github-line" />
					</a>
					<a target="_blank" href="https://www.instagram.com/junubiman/" class="shadow btn btn-squared rounded-xl w-fit p-4 h-fit">
						<iconify-icon icon="ri:instagram-line" />
					</a>
				</div>
				<div class="card card-compact shadow card-bordered w-80">
					<div class="card-body">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-gray-500 text-xl">Based in</p>
								<h3 class={`card-title`}>Kigali, Rwanda</h3>
							</div>
							<div>
								<iconify-icon icon="ri:map-pin-line" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
