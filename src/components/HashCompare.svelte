<script lang="ts">
  let hash1 = '';
  let hash2 = '';
  $: match = hash1 && hash2 && hash1.toLowerCase() === hash2.toLowerCase();
</script>

<div class="card mb-4">
  <div class="card-header">
    <h5 class="mb-0">Hash Comparison (FR-06)</h5>
  </div>
  <div class="card-body">
    <div class="row g-3">
      <div class="col-md-6">
        <label for="hash1" class="form-label">Hash 1</label>
        <input id="hash1" type="text" class="form-control font-monospace" bind:value={hash1} placeholder="Paste first hash..." />
      </div>
      <div class="col-md-6">
        <label for="hash2" class="form-label">Hash 2</label>
        <input id="hash2" type="text" class="form-control font-monospace" bind:value={hash2} placeholder="Paste second hash..." />
      </div>
    </div>

    {#if hash1 && hash2}
      <div class="mt-4 text-center">
        {#if match}
          <h4 class="text-success">Hashes match!</h4>
        {:else}
          <h4 class="text-danger">Hashes do NOT match</h4>
        {/if}
      </div>
    {:else}
      <p class="text-muted text-center mt-3">Enter two hashes to compare</p>
    {/if}
  </div>
</div>