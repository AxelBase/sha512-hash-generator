<script lang="ts">
  import { copyToClipboard } from '../lib/clipboard';

  export let hex = '';
  export let base64 = '';
  export let base64url = '';

  let showToast = false;

  async function copy(text: string) {
    if (await copyToClipboard(text)) {
      showToast = true;
      setTimeout(() => showToast = false, 2000);
    }
  }
</script>

{#if hex}
  <div class="card mb-4">
    <div class="card-header">
      <h5 class="mb-0">SHA-512 Result</h5>
    </div>
    <div class="card-body">
      <div class="row g-3">
        <div class="col-12">
          <label for="hex-output" class="form-label fw-bold">Hexadecimal</label>
          <div class="input-group">
            <input id="hex-output" type="text" class="form-control font-monospace" value={hex} readonly />
            <button class="btn btn-outline-secondary" on:click={() => copy(hex)} aria-label="Copy hex">
              Copy
            </button>
          </div>
        </div>

        <div class="col-12">
          <label for="base64-output" class="form-label fw-bold">Base64</label>
          <div class="input-group">
            <input id="base64-output" type="text" class="form-control font-monospace" value={base64} readonly />
            <button class="btn btn-outline-secondary" on:click={() => copy(base64)} aria-label="Copy base64">
              Copy
            </button>
          </div>
        </div>

        <div class="col-12">
          <label for="base64url-output" class="form-label fw-bold">Base64url</label>
          <div class="input-group">
            <input id="base64url-output" type="text" class="form-control font-monospace" value={base64url} readonly />
            <button class="btn btn-outline-secondary" on:click={() => copy(base64url)} aria-label="Copy base64url">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if showToast}
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div class="toast show align-items-center text-bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">Copied to clipboard!</div>
        <button type="button" class="btn-close btn-close-white" on:click={() => showToast = false} aria-label="Close"></button>
      </div>
    </div>
  </div>
{/if}