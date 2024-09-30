<script>
	import 'iconify-icon';
	import Card from './Card.svelte';
</script>

<div class="hero">
	<div class="hero-content backdrop-blur-lg">
		<div class="grow flex flex-col lg:flex-row gap-4 p-2 lg:p-8 mx-auto">
			<div class="card w-full lg:w-96 h-fit shadow-md relative p-1">
				<div class="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-lg"></div>
				<div class="card bg-white relative z-10">
					<div class="card-body">
						<div class="avatar">
							<div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
								<img src="https://avatars.githubusercontent.com/u/21015204?v=4" alt="A headshot of Emmanuel Gatwech" />
							</div>
						</div>
						<h1 class="card-title text-xl lg:text-2xl">Hi, I'm Emmanuel Gatwech!</h1>
						<p class="text-sm lg:text-base">
							I want to use technology to make life better for everyone. I believe in fairness and
							using new ideas for good!
						</p>
						<p class="text-gray-500 text-sm lg:text-base">Currently working at <span class="text-primary"><a href="https://thepack.tech/" target="_blank">Pack</a></span></p>
					</div>
				</div>
			</div>
			<div class="space-y-4 w-full lg:w-80">
				<div class="card shadow-md card-bordered bg-white">
					<div class="card-body">
						<p class="text-lg lg:text-xl text-gray-500">What I do?</p>
						<div class="flex items-center justify-between">
							<h3 class="card-title text-base lg:text-lg">FullStack Engineer</h3>
							<div class="text-gray-500">
								<iconify-icon icon="ri:computer-line" height="30" width="30" class="lg:h-10 lg:w-10"/>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap gap-2 lg:gap-4 items-center justify-center lg:justify-between">
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
				<div class="card shadow-md card-bordered bg-white">
					<div class="card-body">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-gray-500 text-lg lg:text-xl">Based in</p>
								<h3 class="card-title text-base lg:text-lg">Kigali, Rwanda</h3>
							</div>
							<div class="text-gray-500">
								<iconify-icon icon="ri:map-pin-line" height="30" width="30" class="lg:h-10 lg:w-10"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
