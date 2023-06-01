<script>
	import SectionWrapper from './SectionWrapper.svelte';
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
</script>

<div class="hero">
  <div class="hero-content">
    <div class=" h-fit flex items-center justify-center p-4 gap-4">
      <div class="flex items-center gap-4">
        <div class="w-3/5 h-fit grow space-y-8 bg-base-200 p-8">
          <h1 class="text-5xl font-bold text-primary">Hello, I’m Emmanuel Gatwech</h1>
          <p>
            I have a track record of delivering high-quality products and adding value to distributed teams around the world. My technical expertise includes TypeScript, Next.js, GraphQL, Redis, PostgreSQL, Node.js, and Rust, and I am passionate about web performance, developer tooling, technical writing, and open source.</p>
          <div class="divider text-xl">Let's Talk</div>
          <div>
            <div class="flex items-center gap-4">
              {#each links as { icon, path, title }}
              <div class="tooltip tooltip-bottom tooltip-accent" data-tip={title}>
                <a href={path}><iconify-icon {icon} height="40" target="_blank" width="40" /></a>
              </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="w-1/4 grow bg-amber-100">
          <figure>
            <img src="https://cloud.appwrite.io/v1/storage/buckets/64693e8a74abbc579060/files/64694e4e81cca4862e0d/view?project=646376283eca78018cd9&mode=admin" alt="Energy Man" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>
