<script>
	import 'iconify-icon';
	const links = [
		{
			id: 2,
			href: '/sahil',
			title: 'Sahil',
			icon: 'ri:aliens-line'
		},
		{
			id: 4,
			href: '/bugs',
			title: 'Planet of The Bugs',
			icon: 'ri:aliens-line'
		},
		{
			id: 1,
			href: '/portfolio',
			title: 'Portfolio',
			icon: 'ri:cpu-line'
		},
		{
			id: 3,
			href: '/about',
			title: 'About Me',
			icon: 'ri:aliens-line'
		}
	];
</script>

<header class="bg-primary shadow text-white">
	<nav class="navbar items-center justify-between">
		<div class="navbar-start gap-2">
			<a class="link link-hover normal-case text-2xl flex items-center gap-2" href="/">Eman</a>
		</div>
		<div class="navbar-center hidden md:flex">
			<ul class="menu menu-horizontal px-1 gap-2">
				{#each links as { icon, title, href }}
					<li><a {href}><iconify-icon {icon} />{title}</a></li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
