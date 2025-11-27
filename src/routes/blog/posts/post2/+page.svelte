<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Client-Side Hashing: True Privacy in the Browser | AxelBase Blog</title>
  <meta name="description" content="Unlike online hash tools that log your data, AxelBase runs 100% in your browser. Your files and text never leave your device." />
  <meta property="og:title" content="Client-Side Hashing: True Privacy in the Browser | AxelBase" />
  <meta property="og:description" content="No servers. No logs. No tracking. Your sensitive files stay yours — forever." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Client-Side Hashing: True Privacy</p>
  </div>

  <article class="prose">
    <h1>Client-Side Hashing: True Privacy in the Browser</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>Every day, millions paste passwords, private keys, and sensitive files into online hash generators. Most don’t realize: <strong>their data is logged, stored, and sometimes sold</strong>.</p>

    <p>AxelBase was built to end that.</p>

    <h2>Your Data Never Leaves Your Device</h2>
    <p>When you use AxelBase:</p>
    <ul>
      <li>No network requests are made during hashing</li>
      <li>No analytics, no tracking pixels, no cookies</li>
      <li>File contents are processed in memory or streamed — never uploaded</li>
      <li>The entire tool is open source and auditable</li>
    </ul>

    <p>We use only the browser’s built-in <strong>Web Crypto API</strong> — the same technology used by banking apps and password managers.</p>

    <h2>Why Online Tools Are Dangerous</h2>
    <p>Many “free” hash sites:</p>
    <ul>
      <li>Log IP addresses and input data</li>
      <li>Store hashes in databases “for debugging”</li>
      <li>Inject ads or mining scripts</li>
      <li>Get hacked (yes, even hash sites have been breached)</li>
    </ul>

    <p>With AxelBase, even if you’re on public Wi-Fi, in a library, or behind a corporate proxy — <strong>your data stays 100% private</strong>.</p>

    <h2>Installable & Offline-Capable</h2>
    <p>AxelBase is a Progressive Web App (PWA). Click “Install” in Chrome or Edge, and it becomes a standalone desktop or mobile app. Once cached, it works forever — even with no internet.</p>

    <p class="italic-note">Privacy isn’t a feature. It’s the foundation. AxelBase proves you don’t need to sacrifice security for convenience.</p>
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