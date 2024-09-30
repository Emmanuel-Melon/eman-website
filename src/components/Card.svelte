<script lang="ts">

</script>

<div class="card w-full h-fit relative p-2 rounded-xl">
    <div
        class="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-xl"
    />
    <div class="card bg-white relative z-10 shadow-xl card-bordered border-secondary border-2">
        <div class="card-body">
            <slot />
        </div>
    </div>
</div>