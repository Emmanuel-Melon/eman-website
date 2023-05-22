<script>
	// 	<a href="/">For Teams</a>
	// <a href="/">For Developers</a>
	import 'iconify-icon';
	const links = [
		{
			id: 1,
			href: '/',
			title: 'Experience',
			icon: 'ri:lightbulb-flash-line'
		},
		{
			id: 2,
			href: '/',
			title: 'Projects',
			icon: 'ri:macbook-line'
		},
		{
			id: 3,
			href: '/',
			title: 'About Me',
			icon: 'ri:chat-smile-3-line'
		},
		{
			id: 4,
			href: '/',
			title: 'Contact Me',
			icon: 'ri:mail-add-line'
		}
	];
</script>

<div class="navbar bg-base-200 shadow-lg items-center">
	<div class="navbar-start gap-2">
		<a class="btn btn-ghost normal-case text-xl" href="/">Eman</a>
		<input type="checkbox" class="toggle" checked />
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal px-1 text-white">
			{#each links as { icon, title, href }}
				<li><a {href}><iconify-icon {icon} />{title}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end gap-2 items-center">
		<a class="btn btn-md  gap-2 items-center bg-primary" href="/"
			><iconify-icon icon="ri:fire-line" /> Resume</a
		>
	</div>
</div>
