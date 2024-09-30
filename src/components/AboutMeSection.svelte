<script>
    import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<section class="space-y-4 p-4 md:p-8 mx-auto w-full md:w-4/5 lg:w-3/5 xl:w-2/5 text-center">
    {#if visible}
	<div class="text-center space-y-4 mx-auto mb-4" in:fade={{ duration: 300, delay: 150 }}>
		<div class="text-center">
			<div class="text-neutral" in:fly={{ y: 20, duration: 300, delay: 300 }}>
				<iconify-icon icon="ri:account-pin-circle-line" height="30" width="30" />
			</div>
			<h3
				class={`text-2xl md:text-2xl lg:text-2xl font-bold mx-auto`}
				in:fly={{ y: 20, duration: 300, delay: 450 }}
			>
				Emmanuel Gatwech
			</h3>
			<div class="divider">Aka Eman</div>
		</div>
	</div>
{/if}
    <div class="flex flex-col md:flex-row gap-4 mx-auto">
        <div class="text-gray-500">
            <p class="text-sm md:text-base">
                I'm a Software Developer from South Sudan, I have over four years of experience, having worked on a wide range of projects in various sectors.
            </p>
        </div>
    </div>
</section>
