<script>
    export let interest;
    import 'iconify-icon';
</script>

<div class={`flex ${ interest.position === "left" ? "flex-row" : "flex-row-reverse"}`}>
    <div class="w-3/4 bg-base-100 card rounded-none shadow-xl">
        <div class="card-body"> 
            <div class="bg-accent text-secondary bg-opacity-5 w-fit p-2 rounded-md">
                <iconify-icon icon={interest.icon} height="32" width="32" />
            </div>
          <h2 class="card-title text-primary">{interest.title}</h2>
          <p>{interest.description}</p>
        </div>
    </div>

</div>