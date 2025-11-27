<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Verifying Downloads with SHA-512: Step-by-Step | AxelBase Blog</title>
  <meta name="description" content="The complete guide to safely verifying Linux ISOs, software releases, and large files using SHA-512 checksums — with real examples." />
  <meta property="og:title" content="How to Verify Any Download with SHA-512" />
  <meta property="og:description" content="Never trust a download again. Learn the bulletproof verification workflow used by security professionals." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Verifying Downloads</p>
  </div>

  <article class="prose">
    <h1>Verifying Downloads with SHA-512: Step-by-Step</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>In 2025, supply-chain attacks are the #1 threat. One tampered ISO or installer can compromise your entire system. That’s why every major project publishes SHA-512 checksums — and why you must verify them.</p>

    <h2>The Golden Workflow</h2>
    <ol>
      <li>Download the file <strong>and</strong> the <code>.sha512</code> or <code>SHA512SUMS</code> file</li>
      <li>Open AxelBase in your browser</li>
      <li>Drag and drop the downloaded file</li>
      <li>Copy the Hex output</li>
      <li>Compare with the official checksum</li>
    </ol>

    <h2>Real Example: Ubuntu 24.04 LTS</h2>
    <p>Official checksum (truncated):</p>
    <code style="background:#f8f9fa;padding:1rem;display:block;overflow-x:auto;">
    8f5a8c5... → ubuntu-24.04-desktop-amd64.iso
    </code>

    <p>With AxelBase: drop the ISO → wait → exact same hash appears → 100% verified.</p>

    <h2>Common Mistakes to Avoid</h2>
    <ul>
      <li>Trusting the download page without verifying the checksum file’s signature</li>
      <li>Using MD5 or SHA-1 (broken)</li>
      <li>Using online hash tools (privacy risk)</li>
      <li>Forgetting to check the full 128-character hex</li>
    </ul>

    <p class="italic-note">Verification isn’t optional. It’s the last line of defense between you and a compromised system.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }
  
  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>