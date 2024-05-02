<script>
	import 'iconify-icon';
	const links = [
		{
			id: 1,
			href: '/portfolio',
			title: 'Projects',
			icon: 'ri:cpu-line'
		},
		{
			id: 3,
			href: '/about',
			title: 'About Me',
			icon: 'ri:aliens-line'
		},
		{
			id: 3,
			href: '/contact',
			title: 'Contact',
			icon: 'ri:phone-line'
		}
	];
</script>

<header>
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
