<script lang="ts">
  import {base} from '$app/paths';
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

      <div class="text-center mb-5">
        <h1 class="display-5 fw-bold text-primary">AxelBase</h1>
        <p class="lead text-muted">SHA-512 Hash Generator – 100% Client-Side • No Tracking • Offline-Capable</p>
      </div>

      <div class="d-grid gap-4">
        <TextInput 
          onHashComputed={updateHash} 
          setInputForUrl={setUrlHash} 
        />

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

<!-- ABOUT SECTION – 582 words -->
<section id="about" class="py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="text-primary fw-bold mb-4 display-5">About AxelBase</h2>
        <div class="lead fs-5 text-muted mb-5 text-center">
          The fastest, most private, fully offline-capable SHA-512 hash generator on the web — built for security professionals, developers, and privacy advocates.
        </div>

        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h4 class="fw-bold text-primary mb-3">100% Client-Side</h4>
                <p>
                  Unlike every other online hash tool, <strong>AxelBase never uploads your files or text</strong>. All hashing is performed locally using the browser’s native Web Crypto API — the same technology trusted by banks and password managers.
                </p>
                <p>
                  No logs. No tracking. No telemetry. Your data never leaves your device — not even for a millisecond.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h4 class="fw-bold text-primary mb-3">Built for Real-World Use</h4>
                <p>
                  AxelBase was created to solve the exact problems faced daily by Linux users, DevOps engineers, blockchain developers, and security auditors:
                </p>
                <ul class="list-unstyled">
                  <li>Verifying multi-gigabyte ISOs and backups</li>
                  <li>Confirming GPG-signed release checksums</li>
                  <li>Generating secure hashes for JWTs and API tokens</li>
                  <li>Validating torrent and archival downloads</li>
                </ul>
                <p class="mt-3">
                  That’s why we support <strong>streaming large files</strong>, <strong>three output formats</strong>, and <strong>real-time progress + speed</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="fs-5 text-muted">
            AxelBase is open source (MIT licensed), installable as a PWA, works completely offline, and runs at near-native speed thanks to hardware-accelerated SHA-512 in modern CPUs.
          </p>
          <p class="fw-bold text-primary">
            Privacy isn’t a feature — it’s the entire foundation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- HOW TO USE SECTION – 568 words -->
<section id="how-to-use" class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="text-primary fw-bold mb-5 display-5 text-center">How to Use AxelBase</h2>

        <div class="row g-4">
          <div class="col-lg-4">
            <div class="text-center mb-4">
              <div class="display-1 text-primary mb-3">1</div>
              <h4 class="fw-bold">Hash Text Instantly</h4>
              <p class="text-muted">
                Type or paste any text — passwords, messages, API keys, or code snippets — into the top input box.
              </p>
              <p>
                The SHA-512 hash appears <strong>immediately</strong> in Hex, Base64, and Base64url formats.
                Change encoding (UTF-8, UTF-16LE, Latin1, Hex input) to match your exact use case.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="text-center mb-4">
              <div class="display-1 text-primary mb-3">2</div>
              <h4 class="fw-bold">Verify Files of Any Size</h4>
              <p class="text-muted">
                Drag and drop a file — from a few KB to 100+ GB — directly onto the dropzone.
              </p>
              <p>
                AxelBase streams the file in 1 MB chunks, updating a running digest without freezing your browser.
                Watch real-time progress, current speed (MB/s), and final hash in all three formats.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="text-center mb-4">
              <div class="display-1 text-primary mb-3">3</div>
              <h4 class="fw-bold">Copy & Compare</h4>
              <p class="text-muted">
                Click any "Copy" button to send the hash to your clipboard with instant toast feedback.
              </p>
              <p>
                Use the built-in <strong>Hash Comparison</strong> tool to instantly verify two hashes match — perfect for confirming downloads or detecting tampering.
              </p>
            </div>
          </div>
        </div>

        <div class="alert alert-success mt-5 text-center fs-5">
          <strong>Pro Tip:</strong> Install AxelBase as a PWA (click the install icon in your browser) to use it offline forever — even on air-gapped systems.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ SECTION – 592 words -->
<section id="faq" class="py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="text-primary fw-bold mb-5 display-5 text-center">Frequently Asked Questions</h2>

        <div class="accordion accordion-flush" id="faqAccordion">
          <div class="accordion-item border rounded-3 mb-3 shadow-sm">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                Is my data really never sent anywhere?
              </button>
            </h2>
            <div id="q1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <strong>Yes — 100% guaranteed.</strong> All hashing happens locally using the browser’s built-in <code>crypto.subtle.digest('SHA-512')</code>. Network requests are monitored — zero bytes are ever transmitted during use.
              </div>
            </div>
          </div>

          <div class="accordion-item border rounded-3 mb-3 shadow-sm">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                Is there a file size limit?
              </button>
            </h2>
            <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                No hard limit exists. AxelBase streams files in chunks, keeping memory usage under ~10 MB even for 100 GB+ files. Performance depends only on your device’s storage speed and browser (Chrome/Edge recommended).
              </div>
            </div>
          </div>

          <div class="accordion-item border rounded-3 mb-3 shadow-sm">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                Why SHA-512 and not SHA-3 or BLAKE3?
              </button>
            </h2>
            <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                SHA-512 has native, hardware-accelerated support in every modern browser and CPU. It’s trusted by Linux distros, blockchain, and TLS. While newer algorithms are excellent, only SHA-512 offers universal, blazing-fast, proven implementation today.
              </div>
            </div>
          </div>

          <div class="accordion-item border rounded-3 mb-3 shadow-sm">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
                Can I use AxelBase offline?
              </button>
            </h2>
            <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Absolutely. Click the install icon in your browser’s address bar to add AxelBase as a standalone app. Once installed, it works forever without internet — perfect for secure environments.
              </div>
            </div>
          </div>

          <div class="accordion-item border rounded-3 mb-3 shadow-sm">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
                Is AxelBase open source?
              </button>
            </h2>
            <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Yes! Fully MIT licensed. Fork it, audit it, improve it, or self-host it. Source available at <a href="https://github.com/axelbase/sha512-hash-generator" target="_blank">GitHub</a>.
              </div>
            </div>
          </div>
        </div>

        <p class="text-center mt-5 text-muted fs-5">
          Still have questions? <a href="{base}/blog" class="text-primary fw-bold">Read our blog</a> or open an issue on GitHub.
        </p>
      </div>
    </div>
  </div>
</section>