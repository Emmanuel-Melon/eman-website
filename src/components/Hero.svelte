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

<div class="hero min-h-screen">
	<div class="hero-content backdrop-blur-lg">
		<div class="w-2/5 h-fit grow space-y-4 p-8 mx-auto">
			<p class="text-lg">Eman &amp; the E is for <span class={`text-primary`}>Energy!</span></p>
			<h1 class={`text-5xl font-bold`}>Hello, I’m Emmanuel Gatwech</h1>
			<p>
				Emmanuel Gatwech, is a software developer with over four years of experience, having worked on a wide range of projects in various sectors. His commitment to efficiency and problem-solving is evident in his work. He is committed to advancing technology for the benefit of all.
			</p>
			<a
				class="btn btn-sm btn-primary gap-2"
				href="https://docs.google.com/document/d/1R3nD1VyCwJjwhzpoz8jDn0aKqxoyN2kVRkpHTip4HPY/edit?usp=sharing"
				target="_blank"><iconify-icon icon="ri:article-line" />My Resume</a
			>
		</div>
	</div>
</div>
