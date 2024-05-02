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
			name: 'Pack',
			description:
				'YC backed tech startup which helps teams scale engineering velocity through its unique Pull Requests as a Service platform and delivers world class code quality so customers can ship faster.',
			tags: ['Svelte', 'Node'],
			image: gitstart,
			location: "Barcelona, Spain",
			url: "",
			title: 'FullStack Engineer',
			duration: 'May 2024 - Present',
			stack: [
				{
					title: 'Sveltekit'
				},
				{
					title: 'PostgreSQL'
				},
				{
					title: 'Node.js'
				},
				{
					title: 'TypeScript'
				},
				{
					title: 'AWS'
				}
			]
		},
		{
			id: 2,
			name: 'Sahil',
			description:
				'At Freelyformd we help businesses build an intelligently designed digital future. Tell us about your idea, and we’ll offer the most fitting tech solution.',
			tags: ['Svelte', 'Node'],
			image: freelyformd,
			location: "Kigali, Rwanda",
			url: "",
			title: 'Engineering Lead',
			duration: 'November 2023 - Present',
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
					title: 'CD/CI'
				},
				{
					title: 'TypeScript'
				},
				{
					title: 'Mocha'
				}
			]
		},
		{
			id: 3,
			name: 'G2i',
			description:
				'At Freelyformd we help businesses build an intelligently designed digital future. Tell us about your idea, and we’ll offer the most fitting tech solution.',
			tags: ['Svelte', 'Node'],
			image: freelyformd,
			location: "Delray Beach, Florida",
			url: "",
			title: 'Software Engineer',
			duration: 'April 2024 - Present',
			stack: [
				{
					title: 'SQL',
				},
				{
					title: 'Algorithms'
				},
				{
					title: 'Java'
				},
				{
					title: 'C++'
				},
				{
					title: 'Python'
				},
				{
					title: 'JavaScript'
				}
			]
		},
		{
			id: 4,
			name: 'GitStart',
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
					title: 'CD/CI'
				},
				{
					title: 'TypeScript'
				},
				{
					title: 'Mocha'
				}
			]
		},
		{
			id: 2,
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
					title: 'CD/CI'
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

<SectionWrapper bg="gray-100">
	<div>
		<div class="text-center">
			<h3>Experience</h3>
		</div>
		<div class="flex flex-wrap p-4 gap-4">
			{#each experiences as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</div>
</SectionWrapper>
