<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — Page Not Found | AxelBase SHA-512 Hash Generator</title>
  <meta name="description" content="The page you're looking for doesn't exist. Return to the SHA-512 hash tool or explore our blog." />
  <meta property="og:title" content="404 Not Found | AxelBase" />
  <meta property="og:description" content="Oops! This page doesn't exist. But the hash generator is still ready to help." />
  <meta property="og:url" content="{base}{$page.url.pathname}" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="noindex" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 text-center">
  <div class="row justify-content-center">
    <div class="col-lg-8">

      <!-- Fun 404 Header -->
      <h1 class="display-1 fw-bold text-primary mb-4">404</h1>
      <h2 class="display-5 mb-4">Hash Not Found</h2>

      <p class="lead text-muted mb-5">
        The page you're looking for has vanished — much like a perfectly secure hash that never collides.
      </p>

      <!-- Action Buttons -->
      <div class="d-grid d-md-flex justify-content-center gap-3 mb-5">
        <a href="{base}/" class="btn btn-primary btn-lg px-5">
          Back to Hash Generator
        </a>
        <a href="{base}/blog" class="btn btn-outline-primary btn-lg px-5">
          Read the Blog
        </a>
      </div>

      <!-- Helpful Links -->
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 fw-bold text-primary mb-4">Still lost? Try these:</h3>
          <ul class="list-unstyled text-start mx-auto" style="max-width: 400px;">
            <li class="mb-3"><a href="{base}/" class="text-decoration-none">Home – SHA-512 Hash Tool</a></li>
            <li class="mb-3"><a href="{base}/blog" class="text-decoration-none">Blog – Tutorials & Insights</a></li>
            <li class="mb-3"><a href="{base}/privacy" class="text-decoration-none">Privacy Policy</a></li>
            <li class="mb-3"><a href="{base}/terms" class="text-decoration-none">Terms of Use</a></li>
            <li class="mb-3">
              <a href="https://github.com/yourusername/sha512-hash-generator" target="_blank" rel="noopener" class="text-decoration-none">
                GitHub Repository (Open Source)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Fun Footer Note -->
      <p class="italic-note mt-5 text-muted">
        <em>
          <strong>Don’t worry — your hashes are still safe.</strong><br>
          Even if this page isn’t.
        </em>
      </p>

    </div>
  </div>
</div>

<style>
  .display-1 {
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: -0.05em;
  }

  @media (max-width: 768px) {
    .display-1 { font-size: 5.5rem; }
    .display-5 { font-size: 2rem; }
  }

  .btn {
    min-width: 200px;
  }

  .card {
    background: var(--bs-light);
    border-radius: 1rem;
  }

  .italic-note {
    font-size: 1.1rem;
  }

  a {
    color: var(--bs-primary);
    transition: color 0.2s;
  }

  a:hover {
    color: var(--bs-primary-hover, #0b5ed7);
  }
</style>