<script lang="ts">
  export let percent = 0;
  export let speed = 0;
</script>

{#if percent > 0 && percent < 100}
  <div class="card mb-4">
    <div class="card-body">
      <div class="progress mb-3" style="height: 30px;">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
          role="progressbar"
          style="width: {percent}%"
        >
          {percent.toFixed(1)}%
        </div>
      </div>
      <p class="text-center mb-0">
        Speed: <strong>{speed.toFixed(1)} MB/s</strong>
      </p>
    </div>
  </div>
{/if}