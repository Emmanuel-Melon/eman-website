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
			id: 1,
			name: 'MindsDB',
			description:
				'MindsDB is a fast-growing open-source infrastructure company that enables developers to quickly integrate machine learning into applications. In-Database Machine Learning: For time-series & anomaly detection.',
			tags: ['Svelte', 'Node'],
			image: mindsdb,
			location: "San Jose, California, United States",
			url: "",
			title: 'Integrations Maintainer',
			duration: 'June 2023 - Present',
			stack: [
				{
					title: 'Python'
				},
				{
					title: 'PostgreSQL'
				},
				{
					title: 'SnowFlake'
				},
				{
					title: 'MongoDB'
				},
				{
					title: 'ClickHouse'
				}
			]
		},
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
		<div class="text-center space-y-4 bg-base-200 p-8">
			<h3 class="text-3xl font-bold">Experiences</h3>
			<p>As a software developer with over 5 years of experience, I always strive to add value and I take a proactive approach to my work and place a strong emphasis on clear and effective communication.</p>
		</div>
		<div class="space-y-4 p-8 w-9/12 mx-auto">
			{#each experiences as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</div>
</SectionWrapper>
