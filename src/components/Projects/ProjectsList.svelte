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
            source: "https://github.com/Emmanuel-Melon/planet-of-the-bugs",
            demo: "https://planetofthebugs.xyz"
        },
        {
            id: 2,
            title: "Sahil",
            description: "Inspirers is a platform for people to pursue their dreams – personally, professionally and socially.",
            tags: ["Svelte", "Node"],
            image: cover,
            source: "https://github.com/Emmanuel-Melon/planet-of-the-bugs",
            demo: "https://planetofthebugs.xyz"
        },
        {
            id: 3,
            title: "Inspirers",
            description: "Inspirers is a platform for people to pursue their dreams – personally, professionally and socially.",
            tags: ["Svelte", "Node"],
            image: cover,
            source: "https://github.com/Emmanuel-Melon/planet-of-the-bugs",
            demo: "https://planetofthebugs.xyz"
        },
        {
            id: 4,
            title: "Neno",
            description: "Neno is a word guessing game that you can play with friends. Players receive a letter and are to guess 5 words that start with that letter.",
            tags: ["Svelte", "Node"],
            image: cover,
            source: "https://github.com/Emmanuel-Melon/planet-of-the-bugs",
            demo: "https://planetofthebugs.xyz"
        }
    ];
    import ProjectOverview from "./ProjectOverview.svelte";
    import SectionWrapper from "../SectionWrapper.svelte";
</script>

<SectionWrapper>
    <div class="flex flex-col space-y-4">
        {#each projects as project}
            <div class="w-full p-2">
                <ProjectOverview {project} />
            </div>
        {/each}
    </div>
</SectionWrapper>