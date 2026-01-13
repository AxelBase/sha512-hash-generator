<script lang="ts">
  import { computeSHA512File } from '../lib/crypto';
  import { arrayBufferToHex, arrayBufferToBase64, arrayBufferToBase64Url } from '../lib/formatter';

  export let onHashComputed: (hex: string, base64: string, base64url: string) => void;
  export let onProgress: (percent: number, speed: number) => void;
  export let onStart: () => void;
  export let onClear: () => void;

  let dragging = false;
  let fileName = '';
  let isProcessing = false;

  async function handleFile(file: File | undefined) {
    if (!file) return;
    fileName = file.name + ' (' + (file.size / 1024 / 1024).toFixed(2) + ' MB)';
    isProcessing = true;
    onStart();

    try {
      const buffer = await computeSHA512File(file, onProgress);
      const hex = arrayBufferToHex(buffer);
      const b64 = arrayBufferToBase64(buffer);
      const b64url = arrayBufferToBase64Url(buffer);
      onHashComputed(hex, b64, b64url);
    } catch (err) {
      console.error(err);
    } finally {
      isProcessing = false;
    }
  }

  function dropHandler(e: DragEvent) {
    e.preventDefault();
    dragging = false;
    if (e.dataTransfer?.files[0]) handleFile(e.dataTransfer.files[0]);
  }
</script>

<div class="card mb-4">
  <div class="card-header">
    <h5 class="mb-0">File Hashing</h5>
  </div>
  <div class="card-body">
    <div
      role="region"
      aria-label="File drop zone"
      class="border border-2 border-dashed rounded-3 p-5 text-center position-relative"
      class:border-primary={dragging}
      class:bg-light={dragging}
      on:drop|preventDefault={dropHandler}
      on:dragover|preventDefault={() => dragging = true}
      on:dragleave={() => dragging = false}
      on:dragenter|preventDefault={() => dragging = true}
    >
      {#if !fileName}
        <i class="bi bi-cloud-arrow-up display-1 text-muted"></i>
        <p class="mt-3 mb-0">Drag & drop a file here, or click to select</p>
      {:else}
        <i class="bi bi-file-earmark-check display-1 text-success"></i>
        <p class="mt-3 mb-0"><strong>{fileName}</strong></p>
        {#if isProcessing}<p class="text-muted">Processing...</p>{/if}
      {/if}

      <input
        type="file"
        class="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
        on:change={(e) => handleFile(e.target.files?.[0])}
        aria-label="Select file"
      />
    </div>

    {#if fileName}
      <div class="mt-3 text-end">
        <button class="btn btn-sm btn-outline-danger" on:click={onClear}>
          Remove file
        </button>
      </div>
    {/if}
  </div>
</div>