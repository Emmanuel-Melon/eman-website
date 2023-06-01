<script>
    export let interest;
    import 'iconify-icon';
</script>

<div class={`flex ${ interest.position === "left" ? "flex-row" : "flex-row-reverse"}`}>
    <div class="w-3/4 bg-base-100 card rounded-none shadow">
        <div class="card-body"> 
            <div class="bg-secondary text-secondary bg-opacity-5 w-fit p-2 rounded-md">
                <iconify-icon icon={interest.icon} height="32" width="32" />
            </div>
          <h2 class="card-title text-primary">{interest.title}</h2>
          <p>{interest.description}</p>
        </div>
    </div>
    <div class={`w-1/4 stats stats-vertical shadow rounded-none border-accent border-double ${ interest.position === "left" ? "border-l-4" : "border-r-4"}`}>
        <div class="stat">
          <div class="stat-title">{interest.first.label}</div>
          <div class="stat-value">{interest.first.value}</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">{interest.second.label}</div>
          <div class="stat-value">{interest.second.value}</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">{interest.third.label}</div>
          <div class="stat-value">{interest.third.value}</div>
        </div>
      </div>
</div>