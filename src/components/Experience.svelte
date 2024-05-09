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
				'Pack is the platform that democratizes coaching and mentoring by empowering companies to activate customized pathways that are open to everyone.',
			tags: ['Svelte', 'Node'],
			image: gitstart,
			location: "Barcelona, Spain",
			url: "https://thepack.tech/",
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
				'Sahil is a logistics platform tailored to the needs of businesses in emerging markets, specifically targeting those with lower digital literacy rates or limited access to the internet. Sahil aims to enable these businesses to efficiently manage their supply chain operations, bridging the gap between traditional logistics and modern digital platforms.',
			tags: ['Svelte', 'Node'],
			image: freelyformd,
			location: "Kigali, Rwanda",
			url: "https://sahil.app/",
			title: 'Engineering Lead',
			duration: 'November 2023 - Present',
			stack: [
				{
					title: 'GraphQL',
				},
				{
					title: 'Google Maps'
				},
				{
					title: 'Docker'
				},
				{
					title: 'CD/CI'
				},
				{
					title: 'TypeScript'
				}
			]
		},
		{
			id: 3,
			name: 'G2i',
			description:
				"As a vital part of G2i's vetting team, I helped expand our technical interview process to aid a client's rapid growth. We increased our team to 13 members, covering 16 time zones and working 7 days a week, to quickly provide 250 skilled developers. The client, initially overwhelmed with managing their candidate pool, was facing rapid business expansion.",
			tags: ['Svelte', 'Node'],
			image: freelyformd,
			location: "Delray Beach, Florida",
			url: "https://www.g2i.co/",
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
				'YC backed tech startup which helps teams scale engineering velocity through its unique Pull Requests as a Service platform and delivers world class code quality so customers can ship faster.',
			tags: ['Svelte', 'Node'],
			image: freelyformd,
			location: "Kampala, Uganda",
			url: "https://gitstart.com/",
			title: 'Software Engineer',
			duration: 'May 2021 - Oct 2022',
			stack: [
				{
					title: 'GraphQL',
				},
				{
					title: 'Next.js'
				},
				{
					title: 'Docker'
				},
				{
					title: 'AWS'
				},
				{
					title: 'Node.js'
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
			url: "https://freelyformd.com/",
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
	<div  class="space-y-4 p-8 mx-auto">
		<div class="text-center">
			<div class="text-gray-500">
				<iconify-icon icon="ri:bard-line" height="40" width="40" />
				<p>Experience Section</p>
			</div>
			<h3 class="text-xl">Places I've worked at</h3>
		</div>
		
		<div class="flex flex-wrap p-4 gap-4">
			{#each experiences as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</div>
</SectionWrapper>
