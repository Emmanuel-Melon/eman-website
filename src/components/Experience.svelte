<script>
	import 'iconify-icon';
	import mindsdb from '$lib/images/mindsdb.png';
	import gitstart from '$lib/images/gitstart.png';
	import freelyformd from '$lib/images/freelyformd.png';
	import SectionWrapper from './SectionWrapper.svelte';
	import ExperienceCard from './ExperienceCard.svelte';
	import { customGradient } from './utils/ui';
	const experiences = [
		{
			id: 2,
			name: 'Planet Of The Bugs',
			description:
				'Planet of The Bugs is an interactive website that teaches developers how to debug applications in a gamified way.',
			tags: ['Svelte', 'Node'],
			image: mindsdb,
			location: "Juba, South Sudan",
			url: "",
			title: 'Founder',
			duration: 'May 2023 - Present',
			stack: [
				{
					title: 'GraphQL'
				},
				{
					title: 'Sveltekit'
				},
				{
					title: 'MindsDB'
				},
				{
					title: 'PostgreSQL'
				},
				{
					title: 'TypeScript'
				}
			]
		},
		{
			id: 3,
			name: 'GitStart',
			description:
				'YC backed tech startup which helps teams scale engineering velocity through its unique Pull Requests as a Service platform and delivers world class code quality so customers can ship faster.',
			tags: ['Svelte', 'Node'],
			image: gitstart,
			location: "San Fransisco, California",
			url: "",
			title: 'Software Engineer',
			duration: 'May 2021 - Sep 2022',
			stack: [
				{
					title: 'MongoDB'
				},
				{
					title: 'PostgreSQL'
				},
				{
					title: 'Next.js'
				},
				{
					title: 'Relay'
				},
				{
					title: 'Apollo GraphQL'
				}
			]
		},
		{
			id: 4,
			name: 'FreelyFormd',
			description:
				'At Freelyformd we help businesses build an intelligently designed digital future. Tell us about your idea, and we’ll offer the most fitting tech solution.',
			tags: ['Svelte', 'Node'],
			image: freelyformd,
			location: "Kampala, Uganda",
			url: "",
			title: 'Software Engineer',
			duration: 'Jun 2020 - Apr 2021',
			stack: [
				{
					title: 'MongoDB',
				},
				{
					title: 'React.js'
				},
				{
					title: 'Docker'
				},
				{
					title: 'Gitlab CD/CI'
				},
				{
					title: 'TypeScript'
				},
				{
					title: 'Mocha'
				}
			]
		}
	];
</script>

<SectionWrapper>
	<div>
		<div class="space-y-4 p-8 w-9/12 mx-auto">
			{#each experiences as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</div>
</SectionWrapper>
