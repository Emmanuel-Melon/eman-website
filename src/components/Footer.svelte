<script>
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
		}
	];
</script>
<footer class="footer footer-center p-10">
  <div>
    <iconify-icon icon="ri:plug-2-line" height="50" target="_blank" width="50" />
    <p class="font-bold">
      The Energy Man
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div>
    <div class="flex items-center gap-4">
      {#each links as { icon, path, title }}
      <div class="tooltip tooltip-bottom tooltip-accent" data-tip={title}>
        <a href={path}><iconify-icon {icon} height="40" target="_blank" width="40" /></a>
      </div>
      {/each}
    </div>
  </div>
</footer>