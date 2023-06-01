<script>
	import 'iconify-icon';
	const links = [
		{
			id: 1,
			href: '/projects',
			title: 'Projects',
			icon: 'ri:cpu-line'
		},
		{
			id: 2,
			href: '/about',
			title: 'About Me',
			icon: 'ri:aliens-line'
		}
	];
</script>
<header class="bg-base-100">

<nav class="navbar items-center justify-between">
	<div class="navbar-start gap-2">
		<a class=";ink link-hover normal-case text-2xl flex items-center gap-2" href="/"><iconify-icon icon="ri:plug-2-line"  /> Eman</a>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			{#each links as { icon, title, href }}
				<li><a {href}><iconify-icon {icon} />{title}</a></li>
			{/each}
			<li><a href='https://docs.google.com/document/d/1R3nD1VyCwJjwhzpoz8jDn0aKqxoyN2kVRkpHTip4HPY/edit?usp=sharing' target="_blank"><iconify-icon icon='ri:article-line' />Resume</a></li>
		</ul>
	</div>
</nav>

</header>