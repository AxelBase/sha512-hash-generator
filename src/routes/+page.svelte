<script lang="ts">
  import { base } from '$app/paths';
  import TextInput from '../components/TextInput.svelte';
  import FileDropzone from '../components/FileDropzone.svelte';
  import HashOutput from '../components/HashOutput.svelte';
  import HashCompare from '../components/HashCompare.svelte';
  import ProgressBar from '../components/ProgressBar.svelte';
  import ClearButton from '../components/ClearButton.svelte';

  let currentHex = '';
  let currentBase64 = '';
  let currentBase64Url = '';
  let progress = 0;
  let speed = 0;
  let fileSelected = false;

  function updateHash(hex: string, b64: string, b64url: string) {
    currentHex = hex;
    currentBase64 = b64;
    currentBase64Url = b64url;
  }

  function clearAll() {
    currentHex = currentBase64 = currentBase64Url = '';
    progress = 0;
    speed = 0;
    fileSelected = false;
    window.location.hash = '';
  }

  function setUrlHash(text: string, encoding: string) {
    if (!text) {
      window.location.hash = '';
      return;
    }
    const encoded = btoa(encodeURIComponent(text)).replace(/=/g, '');
    window.history.replaceState(null, '', '#' + encoded + (encoding !== 'utf8' ? `&enc=${encoding}` : ''));
  }
</script>

<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-10 col-xl-8">
      <div class="text-center mb-5 mt-4">
        <h1 class="display-4 fw-bold" style="color: var(--pearl-gold)">AxelBase</h1>
        <p class="lead text-muted">SHA-512 Hash Generator – 100% Client-Side • Secure • Bubbly</p>
      </div>

      <div class="d-grid gap-4">
        <TextInput onHashComputed={updateHash} setInputForUrl={setUrlHash} />
        <FileDropzone 
          onHashComputed={updateHash} 
          onProgress={(p, s) => { progress = p; speed = s; }}
          onStart={() => fileSelected = true}
          onClear={() => { fileSelected = false; clearAll(); }}
        />
        {#if progress > 0 || fileSelected}
          <ProgressBar percent={progress} speed={speed} />
        {/if}
        <HashOutput hex={currentHex} base64={currentBase64} base64url={currentBase64Url} />
        <HashCompare />
        <ClearButton onClear={clearAll} />
      </div>
    </div>
  </div>
</div>

<section id="about" class="py-5" style="background: white;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="text-center mb-4" style="color: var(--pearl-gold)">About AxelBase</h2>
        <div class="card p-5">
          <p class="fs-5 text-muted">The fastest, most private, fully offline-capable SHA-512 hash generator on the web — built for security professionals and developers.</p>
          <div class="row g-4 mt-2">
            <div class="col-md-6">
              <h4 style="color: var(--pearl-gold)">Local Privacy</h4>
              <p>All hashing is performed locally using the browser’s native Web Crypto API. Your data never leaves your device.</p>
            </div>
            <div class="col-md-6">
              <h4 style="color: var(--pearl-gold)">Enterprise Speed</h4>
              <p>Supports streaming large files (100GB+) without crashing the browser, utilizing hardware acceleration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="how-to-use" class="py-5">
  <div class="container py-5">
    <h2 class="text-center mb-5" style="color: var(--pearl-gold)">How to Use</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card p-4 h-100 text-center">
          <div class="display-6 mb-3" style="color: var(--pearl-gold)">01</div>
          <h5>Input Data</h5>
          <p class="small text-muted">Paste text or drop a file into the generator above.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-4 h-100 text-center">
          <div class="display-6 mb-3" style="color: var(--pearl-gold)">02</div>
          <h5>Choose Format</h5>
          <p class="small text-muted">Instant results in Hex, Base64, or Base64url formats.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-4 h-100 text-center">
          <div class="display-6 mb-3" style="color: var(--pearl-gold)">03</div>
          <h5>Compare</h5>
          <p class="small text-muted">Use the comparison tool to verify your hash against an original.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="py-5 bg-white">
  <div class="container py-5">
    <h2 class="text-center mb-5" style="color: var(--pearl-gold)">FAQ</h2>
    <div class="accordion w-75 mx-auto" id="faqAccordion">
      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
            Is it safe?
          </button>
        </h2>
        <div id="q1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes, it's 100% server-less. We don't even have a database to send your hashes to.
          </div>
        </div>
      </div>
      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
            Is there a file limit?
          </button>
        </h2>
        <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            No limit. You can hash a 1TB file if your browser can read it; AxelBase streams the data chunk by chunk.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>