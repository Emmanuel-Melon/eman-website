<script>
	import 'iconify-icon';
	const links = [
		{
			id: 2,
			href: '/projects',
			title: 'Projects',
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
<header class="border-b-4 border-accent border-double bg-base-100 shadow-2xl">

<nav class="navbar items-center justify-between">
	<div class="navbar-start gap-2">
		<a class="btn btn-ghost normal-case text-xl" href="/">Eman</a>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			{#each links as { icon, title, href }}
				<li><a {href}><iconify-icon {icon} />{title}</a></li>
			{/each}
		</ul>
	</div>
</nav>

</header>