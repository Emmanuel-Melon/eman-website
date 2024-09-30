<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { spring } from 'svelte/motion';

    let hovered = false;
    const scaleSpring = spring(1, {
        stiffness: 0.1,
        damping: 0.2
    });

    $: $scaleSpring = hovered ? 1.05 : 1;
</script>

<div 
    class="card card-compact w-full h-fit relative p-2 rounded-xl cursor-pointer transition-all duration-300"
    on:mouseenter={() => hovered = true}
    on:mouseleave={() => hovered = false}
    style="transform: scale({$scaleSpring})"
>
    <div
        class="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-xl"
    />
    <div class="card bg-white relative z-10 shadow-xl card-bordered">
        <div class="card-body">
            <slot />
        </div>
    </div>
</div>