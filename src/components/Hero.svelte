<script>
	import SectionWrapper from './SectionWrapper.svelte';
  import { customGradient } from './utils/ui';
  import 'iconify-icon';
  const links = [
		{
			icon: 'ri:linkedin-box-line',
			path: 'https://www.linkedin.com/in/emmanuel-gatwech/',
			title: 'LinkedIn'
		},
		{
			icon: 'ri:github-line',
			path: 'https://github.com/Emmanuel-Melon',
			title: 'GitHub'
		},
		{
			icon: 'fa6-brands:hashnode',
			path: 'https://eman.hashnode.dev/',
			title: 'Hashnode'
		},
    {
      icon: 'ri:stack-overflow-line',
      path: "https://stackoverflow.com/users/6583352/emmanuel-gabriel",
      title: 'Stack Overflow'
    }
	];

  const interests = [
    {
      name: "Open Source",
      icon: "ri:open-source-line"
    },
    {
      name: "Technical Writing",
      icon: "ri:article-line"
    },
    {
      name: "Mentoring",
      icon: "ri:graduation-cap-line"
    },
    {
      name: "Music",
      icon: "ri:album-line"
    },
    {
      name: "Sports",
      icon: "ri:basketball-line"
    }
  ];

  const img = "https://cloud.appwrite.io/v1/storage/buckets/6478aa17ebf39282037b/files/6478ac19d25df86a7008/view?project=6478aa0a8b9be5deb589&mode=admin";
</script>

<div class="hero">
  <div class="hero-content backdrop-blur-lg">
    <div class=" h-fit flex items-center justify-center p-4 gap-4 bg-base-100 bg-opacity-10">
      <div class="flex items-center gap-4">
        <div class="card card-compact w-72 shadow bg-base-100 rounded-none">
          <figure>
            <img class="rotate-1 border-8 border-primary border-double" src={img} alt="Energy Man" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl">
              Software Developer
            </h2>
            <ul class="space-y-2">
              <li class="flex items-center gap-2"><iconify-icon icon="ri:building-line" /> SyncNet</li>
              <li class="flex items-center gap-2"><iconify-icon icon="ri:map-pin-user-line" /> Doha, Qatar</li>
            </ul>
            <div class="divider">Let's Talk</div>
            <div class="flex items-center gap-4 mx-auto w-fit">
              {#each links as { icon, path, title }}
              <div class="tooltip tooltip-bottom tooltip-accent" data-tip={title}>
                <a href={path}><iconify-icon {icon} height="32" target="_blank" width="32" /></a>
              </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="w-3/5 h-fit grow space-y-4 p-8">
          <p class="text-lg">Eman &amp; the E is for <span class={`text-primary`}>Energy!</span></p>
          <h1 class={`text-5xl font-bold ${customGradient()}`}>Hello, I’m Emmanuel Gatwech</h1>
          <p>
            I have a track record of delivering high-quality products and adding value to distributed teams around the world. My technical expertise includes TypeScript, Next.js, GraphQL, Redis, PostgreSQL, Node.js, and Rust, and I am passionate about web performance, developer tooling, technical writing, and open source.</p>
            <h3>Things I'm Passionate About</h3>
            <div class="flex gap-2">

              {#each interests as {icon, name}}
              <div class="badge badge-lg badge-outline flex gap-2"><iconify-icon {icon} /> {name}</div>
              {/each}
            </div>
        </div>
      </div>
    </div>
  </div>
</div>