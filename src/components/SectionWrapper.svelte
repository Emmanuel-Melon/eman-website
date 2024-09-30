<script>
	export let bg = "transparent"
</script>
<section class={`min-h-screen space-y-4 flex items-start justify-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-2/5 mx-auto bg-${bg}`}>
	<slot />
</section>