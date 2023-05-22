<script>
    const projects = [
        {
            id: 1,
            title: "Planet of The Bugs",
            description: "Planet of The Bugs is an interactive website that teaches developers how to debug applications in a gamified way.",
            tags: ["Svelte", "Node"],
            image: "https://cloud.appwrite.io/v1/storage/buckets/64693e8a74abbc579060/files/6469466101af50b3e087/view?project=646376283eca78018cd9&mode=admin",
            source: "",
            demo: ""
        },
        {
            id: 2,
            title: "Inspirers",
            description: "Inspirers is a platform for people to pursue their dreams – personally, professionally and socially.",
            tags: ["Svelte", "Node"],
            image: "https://cloud.appwrite.io/v1/storage/buckets/64693e8a74abbc579060/files/6469466101af50b3e087/view?project=646376283eca78018cd9&mode=admin",
            source: "",
            demo: ""
        },
        {
            id: 2,
            title: "Neno",
            description: "Neno is a word guessing game that you can play with friends. Players receive a letter and are to guess 5 words that start with that letter.",
            tags: ["Svelte", "Node"],
            image: "https://cloud.appwrite.io/v1/storage/buckets/64693e8a74abbc579060/files/6469466101af50b3e087/view?project=646376283eca78018cd9&mode=admin",
            source: "",
            demo: ""
        }
    ];
    import ProjectOverview from "./ProjectOverview.svelte";
</script>

<div class="flex flex-wrap gap-2 items-center justify-center">
    {#each projects as project}
     <ProjectOverview {project} />
    {/each}
</div>