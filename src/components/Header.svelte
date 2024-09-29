<script>
	import 'iconify-icon';
	import { page } from '$app/stores';
	let isMenuOpen = false;
	let wasMenuOpen = false;

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

	function toggleMenu() {
		wasMenuOpen = isMenuOpen;
		isMenuOpen = !isMenuOpen;
	}

	$: activeUrl = $page.url.pathname;
</script>

<header class="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-2/5 mx-auto px-4 my-4 relative p-1 {isMenuOpen ? 'bg-base-200' : 'bg-base-200 rounded-full'}">
	<div class="absolute inset-2 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-full transition-opacity duration-300 {isMenuOpen || wasMenuOpen ? 'opacity-0' : 'opacity-30'}"></div>
	<div class="{isMenuOpen ? '' : 'relative z-10 rounded-full'}">
		<nav class="navbar items-center justify-between">
			<div class="flex-1 md:hidden">
				<a href="/" class="text-xl font-bold">Eman</a>
			</div>
			<div class="flex-none hidden md:block">
				<ul class="menu menu-sm menu-horizontal px-1 gap-2">
					{#each links as { icon, title, href }}
						<li>
							<a 
								{href} 
								class="{activeUrl === href ? 'bg-secondary' : 'bg-transparent'} transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
								on:click={() => {
									if (activeUrl !== href) {
										const oldActive = document.querySelector('.bg-secondary');
										if (oldActive) oldActive.classList.remove('bg-secondary');
										setTimeout(() => {
											const newActive = document.querySelector(`a[href="${href}"]`);
											if (newActive) newActive.classList.add('bg-secondary');
										}, 100);
									}
								}}
							>
								<iconify-icon {icon} class="transition-transform duration-300 ease-in-out group-hover:rotate-12" />
								<span class="transition-colors duration-300 ease-in-out group-hover:text-primary">{title}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex-none md:hidden">
				<button on:click={toggleMenu} class="btn btn-square btn-ghost">
					<iconify-icon icon="ri:menu-line" width="24" height="24" />
				</button>
			</div>
		</nav>
		{#if isMenuOpen}
			<div class="md:hidden">
				<ul class="menu w-full">
					{#each links as { icon, title, href }}
						<li><a class="text-gray-500 {activeUrl === href ? 'bg-secondary rounded-full' : ''}" class:active={activeUrl === href} {href} on:click={toggleMenu}><iconify-icon {icon} />{title}</a></li>
						{/each}
				</ul>
			</div>
		{/if}
	</div>
</header>
