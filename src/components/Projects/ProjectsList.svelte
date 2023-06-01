<script>
    import 'iconify-icon';
	import cover from "$lib/images/cover.png";
    const projects = [
        {
            id: 1,
            title: "Planet of The Bugs",
            description: "Planet of The Bugs is an interactive website that teaches developers how to debug applications in a gamified way.",
            tags: ["Svelte", "Node"],
            image: cover,
            source: "",
            demo: ""
        },
        {
            id: 2,
            title: "Inspirers",
            description: "Inspirers is a platform for people to pursue their dreams – personally, professionally and socially.",
            tags: ["Svelte", "Node"],
            image: cover,
            source: "",
            demo: ""
        },
        {
            id: 2,
            title: "Neno",
            description: "Neno is a word guessing game that you can play with friends. Players receive a letter and are to guess 5 words that start with that letter.",
            tags: ["Svelte", "Node"],
            image: cover,
            source: "",
            demo: ""
        }
    ];
    import ProjectOverview from "./ProjectOverview.svelte";
    import SectionWrapper from "../SectionWrapper.svelte";
</script>

<SectionWrapper>
    <div class="p-4 space-y-4">
        <div class="text-center space-y-4">
            <h3 class="text-3xl font-bold">Projects</h3>
            <p>
                I thrive on solving complex challenges and finding elegant solutions that push the boundaries
                of what's possible.
            </p>
        </div>
        <div class="space-y-4">
            {#each projects as project}
            <ProjectOverview {project} />
           {/each}
        </div>
    </div>
</SectionWrapper>