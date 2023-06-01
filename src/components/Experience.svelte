<script>
	import 'iconify-icon';
	import cover from '$lib/images/cover.png';
	import SectionWrapper from './SectionWrapper.svelte';
	const experiences = [
		{
			id: 1,
			name: 'SyncNet',
			description:
				'Planet of The Bugs is an interactive website that teaches developers how to debug applications in a gamified way.',
			tags: ['Svelte', 'Node'],
			image: cover,
			title: 'Software Engineer',
			demo: ''
		},
		{
			id: 2,
			name: 'GitStart',
			description:
				'Inspirers is a platform for people to pursue their dreams – personally, professionally and socially.',
			tags: ['Svelte', 'Node'],
			image: cover,
			title: 'Software Engineer',
			demo: ''
		},
		{
			id: 2,
			name: 'FreelyFormd',
			description:
				'Neno is a word guessing game that you can play with friends. Players receive a letter and are to guess 5 words that start with that letter.',
			tags: ['Svelte', 'Node'],
			image: cover,
			title: 'Software Engineer',
			demo: ''
		}
	];

	/**
     *             <div class="card card-compact w-full bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{name} - <span class="text-secondary">{title}</span> </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
    */
</script>

<SectionWrapper>
	<div class="space-y-4 p-8 w-9/12">
		<div class="text-center space-y-4">
			<h3 class="text-3xl font-bold text-primary">Experience</h3>
		</div>

		<div class="join join-vertical w-full">
			{#each experiences as { name, title, id }}
				<div class="collapse collapse-arrow join-item border border-base-300">
	
					<div class="collapse-title text-xl font-medium">
						Click to open this one and close others
					</div>
					<div class="collapse-content">
						<p>hello</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</SectionWrapper>
