<script lang="ts">
  export let onClear: () => void;
</script>

<div class="text-center mb-5">
  <button class="btn btn-lg btn-outline-danger px-5" on:click={onClear}>
    <i class="bi bi-trash"></i> Clear All
  </button>
</div>