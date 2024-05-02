<script>
	import 'iconify-icon';
	const links = [
		{
			id: 1,
			href: '/',
			title: 'Home',
			icon: 'ri:home-line'
		},
		{
			id: 2,
			href: '/portfolio',
			title: 'Projects',
			icon: 'ri:apps-2-add-line'
		},
		{
			id: 3,
			href: '/about',
			title: 'About Me',
			icon: 'ri:account-pin-circle-line'
		},
		{
			id: 4,
			href: '/contact',
			title: 'Contact',
			icon: 'ri:phone-line'
		}
	];
</script>


<header class="bg-base-200 w-2/5 mx-auto px-4 rounded-xl my-4">
	<nav class="navbar items-center justify-center">
		<div class="navbar-center hidden md:flex">
			<ul class="menu menu-horizontal px-1 gap-2">
				{#each links as { icon, title, href }}
					<li><a {href}><iconify-icon {icon} />{title}</a></li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
