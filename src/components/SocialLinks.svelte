<script lang="ts">
    const links = [
        {
            icon: 'ri:twitter-line',
            href: 'https://twitter.com/JunubiMan',
            label: 'Emmanuel Gatwech on Twitter'
        },
        {
            icon: 'ri:linkedin-line',
            href: 'https://www.linkedin.com/in/emmanuel-gatwech/',
            label: 'Emmanuel Gatwech on LinkedIn'
        },
        {
            icon: 'ri:github-line',
            href: 'https://github.com/Emmanuel-Melon', 
            label: 'Emmanuel Gatwech on GitHub'
        },
        {
            icon: 'ri:instagram-line',
            href: 'https://www.instagram.com/junubiman/',
            label: 'Emmanuel Gatwech on Instagram'
        },
        {
            icon: 'ri:quill-pen-line',
            href: 'https://eman.hashnode.dev/',
            label: 'Emmanuel Gatwech on Hashnode'
        }
    ]
</script>

<h3 class="text-xl font-bold text-center">Follow me</h3>
<div class="flex flex-wrap gap-2 lg:gap-4 items-center justify-center">
    {#each links as link}
        <a
            target="_blank"
            aria-label={link.label}
            href={link.href}
            class="btn btn-ghost btn-squared rounded-xl bg-transparent w-10 h-10 lg:w-12 lg:h-12 p-2 lg:p-3 hover:bg-white hover:text-primary"
        >
            <iconify-icon icon={link.icon} height="20" width="20" />
        </a>
    {/each}
</div>
