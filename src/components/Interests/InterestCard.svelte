<script>
    export let interest;
    import 'iconify-icon';
</script>

<div class={`flex ${ interest.position === "left" ? "flex-row" : "flex-row-reverse"}`}>
    <div class="w-3/4 bg-base-100 card rounded-none shadow">
        <div class="card-body"> 
            <div class="bg-accent text-accent bg-opacity-5 w-fit p-2 rounded-md">
                <iconify-icon icon={interest.icon} height="32" width="32" />
            </div>
          <h2 class="card-title text-primary">{interest.title}</h2>
          <p>{interest.description}</p>
        </div>
    </div>
    <div class={`w-1/4 stats stats-vertical shadow rounded-none border-secondary border-double ${ interest.position === "left" ? "border-l-4" : "border-r-4"}`}>
        <div class="stat">
          <div class="stat-title">{interest.stats.label}</div>
          <div class="stat-value">{interest.stats.value}</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
        </div>
      </div>
</div>