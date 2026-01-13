<script lang="ts">
  import { encodingOptions } from '../lib/encodings';
  import { computeSHA512Text } from '../lib/crypto';
  import { arrayBufferToHex, arrayBufferToBase64, arrayBufferToBase64Url } from '../lib/formatter';
  import { copyToClipboard } from '../lib/clipboard';
  import { onMount } from 'svelte';

  export let onHashComputed: (hex: string, base64: string, base64url: string) => void;
  export let setInputForUrl: (text: string, encoding: string) => void;

  let text = '';
  let encoding: 'utf8' | 'utf16le' | 'latin1' | 'hex' = 'utf8';
  let hex = '';
  let base64 = '';
  let base64url = '';
  let showToast = false;

  async function hashText() {
    if (!text.trim()) {
      hex = base64 = base64url = '';
      onHashComputed('', '', '');
      return;
    }
    try {
      const buffer = await computeSHA512Text(text, encoding);
      hex = arrayBufferToHex(buffer);
      base64 = arrayBufferToBase64(buffer);
      base64url = arrayBufferToBase64Url(buffer);
      onHashComputed(hex, base64, base64url);
      setInputForUrl(text, encoding);
    } catch (e) {
      hex = 'Invalid hex input';
      base64 = base64url = '';
    }
  }

  async function copy(value: string) {
    const ok = await copyToClipboard(value);
    if (ok) {
      showToast = true;
      setTimeout(() => showToast = false, 2000);
    }
  }

  $: text, encoding, hashText();

  onMount(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      try {
        const decoded = atob(hash.replace(/-/g, '+').replace(/_/g, '/'));
        text = decoded;
      } catch {}
    }
  });
</script>

<div class="card mb-4">
  <div class="card-header">
    <h5 class="mb-0">Text Input</h5>
  </div>
  <div class="card-body">
    <div class="mb-3">
      <label for="encoding" class="form-label">Encoding</label>
      <select id="encoding" class="form-select" bind:value={encoding}>
        {#each encodingOptions as opt}
          <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
    </div>

    <div class="mb-3">
      <label for="textInput" class="form-label">Enter text</label>
      <textarea
        id="textInput"
        class="form-control font-monospace"
        rows="6"
        bind:value={text}
        placeholder="Type or paste your text here..."
      ></textarea>
    </div>

    {#if hex}
      <div class="row g-3">
        <div class="col-12">
          <div class="input-group">
            <span class="input-group-text">Hex</span>
            <input type="text" class="form-control font-monospace" value={hex} readonly />
            <button class="btn btn-outline-secondary" on:click={() => copy(hex)} aria-label="Copy hex value">
              Copy
            </button>
          </div>
        </div>
        <div class="col-12">
          <div class="input-group">
            <span class="input-group-text">Base64</span>
            <input type="text" class="form-control font-monospace" value={base64} readonly />
            <button class="btn btn-outline-secondary" on:click={() => copy(base64)} aria-label="Copy base64 value">
              Copy
            </button>
          </div>
        </div>
        <div class="col-12">
          <div class="input-group">
            <span class="input-group-text">Base64url</span>
            <input type="text" class="form-control font-monospace" value={base64url} readonly />
            <button class="btn btn-outline-secondary" on:click={() => copy(base64url)} aria-label="Copy base64url value">
              Copy
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

{#if showToast}
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div class="toast show align-items-center text-bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">Copied to clipboard!</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          on:click={() => showToast = false}
          aria-label="Close notification"
        ></button>
      </div>
    </div>
  </div>
{/if}

<style>
  textarea { resize: vertical; }
</style>