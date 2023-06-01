<script>
	import 'iconify-icon';
	import SectionWrapper from '../SectionWrapper.svelte';
	import cover from '$lib/images/cover.png';
	import InterestCard from './InterestCard.svelte';

	const interests = [
		{
			id: 1,
			title: 'Open Source',
			description:
				'I actively contribute to various projects on GitHub. By collaborating with talented developers from around the globe, we drive innovation, create cutting-edge solutions, and make technology accessible to all. Through my contributions, I have the opportunity to hone my skills, learn from industry experts, and give back to the developer community.',
                icon: 'ri:open-source-line',
            position: "left",
            first: {
                label: "Repositories",
                value: "74"
            },
            second: {
                label: "Pull Requests",
                value: "209"
            },
            third: {
                label: "Followers",
                value: "70"
            }
		},
		{
			id: 2,
			title: 'Technical Writing',
			description:
				'I strive to demystify intricate topics, provide insights, and empower fellow developers on their learning journey. By distilling my experiences and expertise into engaging content, I aim to foster a culture of continuous learning and contribute to the growth of the developer community.',
                icon: 'ri:article-line',
            position: "right",
            first: {
                label: "Article Views",
                value: "10502"
            },
            second: {
                label: "Articles Published",
                value: "13"
            },
            third: {
                label: "Followers",
                value: "50"
            }
		}
	];

</script>

<SectionWrapper>
    <div class="p-4 h-full">
        <div class="w-9/12 mx-auto space-y-4">
            <div class="text-center space-y-4">
                <h3 class="text-3xl font-bold">Things I'm Passionate About</h3>
                <p>
                    Join me on this journey as we explore the endless possibilities of software development,
                    push boundaries, and create impactful solutions together. Let's build something
                    extraordinary!
                </p>
            </div>
            <div class="space-y-4">
                {#each interests as interest}
                    <InterestCard {interest} />
                {/each}
            </div>
        </div>
	</div>
</SectionWrapper>
