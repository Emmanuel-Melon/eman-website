<script>
    import 'iconify-icon';
    import cover from "$lib/images/cover.png";
    const projects = [
        {
            id: 2,
            title: "Sahil",
            description: "Sahil functions as a platform linking businesses with suppliers and customers, facilitating automated procurement and distribution of goods.",
            tags: ["Svelte", "Node"],
            image: "https://pbs.twimg.com/media/GKA38YVXgAA68Mk?format=jpg&name=large",
            source: "https://github.com/Sahil-Connect/sahil",
            demo: "https://sahil.app"
        },
        {
            id: 1,
            title: "Planet of The Bugs",
            description: "Planet of The Bugs is an interactive website that teaches developers how to debug applications in a gamified way.",
            tags: ["Svelte", "Node"],
            source: "https://github.com/Emmanuel-Melon/planet-of-the-bugs",
            demo: "https://planetofthebugs.xyz",
            image: "https://pbs.twimg.com/media/F7mOgSmXEAA164T?format=jpg&name=4096x4096"
        }
    ];
    import ProjectOverview from "./ProjectOverview.svelte";
    import SectionWrapper from "../SectionWrapper.svelte";
</script>

<SectionWrapper>
    <div class="flex flex-col space-y-2 w-full">
        {#each projects as project}
            <div class="w-full p-2">
                <ProjectOverview {project} />
            </div>
        {/each}
    </div>
</SectionWrapper>