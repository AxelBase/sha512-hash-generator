<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Streaming Large Files: 10GB+ Without Freezing | AxelBase Blog</title>
  <meta name="description" content="Learn how AxelBase uses memory-efficient streaming and the Web Crypto API to hash massive files — up to 100GB — without crashing your browser." />
  <meta property="og:title" content="How AxelBase Hashes 10GB+ Files Without Freezing" />
  <meta property="og:description" content="Real streaming. Real speed. Zero memory bloat. This is how modern browser cryptography should work." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Streaming Large Files</p>
  </div>

  <article class="prose">
    <h1>Streaming Large Files: How AxelBase Handles 10GB+ Files</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>Try hashing a 50 GB Blu-ray ISO in your browser. Most tools freeze, crash, or run out of memory. AxelBase? It just works — at over <strong>700 MB/s</strong> on a typical SSD.</p>

    <h2>The Problem with Traditional File Hashing</h2>
    <p>Most web-based hash tools do this:</p>
    <ul>
      <li>Load the entire file into memory</li>
      <li>Convert to Base64 or ArrayBuffer</li>
      <li>Crash when file > 2–4 GB</li>
    </ul>

    <p>That’s not how professionals do it.</p>

    <h2>How AxelBase Does It Right</h2>
    <p>We use <strong>true streaming</strong>:</p>
    <ul>
      <li>File is read in 1 MB chunks using <code>File.slice()</code></li>
      <li>Each chunk updates a running SHA-512 digest</li>
      <li>Memory usage stays under 10 MB — even for 100 GB files</li>
      <li>Progress bar and real-time speed (MB/s) are updated instantly</li>
    </ul>

    <p>This mirrors how <code>sha512sum</code>, <code>certutil</code>, and <code>Get-FileHash</code> work on the command line — but entirely in the browser.</p>

    <h2>Real-World Use Cases</h2>
    <ul>
      <li>Verifying Linux ISOs and Windows images</li>
      <li>Checking game backups and archival data</li>
      <li>Validating torrent downloads</li>
      <li>Auditing large dataset integrity</li>
    </ul>

    <p class="italic-note">AxelBase proves: the browser is now a first-class environment for serious cryptographic work.</p>
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