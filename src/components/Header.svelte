<script>
	import 'iconify-icon';
	const links = [
		{
			id: 1,
			href: '/portfolio',
			title: 'Portfolio',
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

<header class="bg-base-100 shadow">
	<nav class="navbar items-center justify-between">
		<div class="navbar-start gap-2">
			<a class=";ink link-hover normal-case text-2xl flex items-center gap-2" href="/"
				>Eman</a
			>
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
