<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Offline-First Design: Install AxelBase as a Real App | AxelBase Blog</title>
  <meta name="description" content="Turn AxelBase into a native-like desktop or mobile app that works forever — even with no internet. Here’s how and why." />
  <meta property="og:title" content="Install AxelBase: Works Offline Forever" />
  <meta property="og:description" content="One click → real app. No internet required. This is the future of web tools." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Offline-First PWA</p>
  </div>

  <article class="prose">
    <h1>Offline-First Design: Installable PWA Explained</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>AxelBase isn’t just a website. It’s a full Progressive Web App (PWA) — meaning you can install it like a real application on Windows, macOS, Linux, Android, or iOS.</p>

    <h2>How to Install (30 seconds)</h2>
    <ul>
      <li>Chrome/Edge: Click the install icon in the address bar</li>
      <li>Firefox: Not supported (use Chrome/Edge)</li>
      <li>Android: “Add to home screen” from menu</li>
      <li>iOS: Share → “Add to Home Screen”</li>
    </ul>

    <h2>What Happens After Install?</h2>
    <ul>
      <li>Runs in its own window (no browser tabs)</li>
      <li>Appears in Start Menu / Applications</li>
      <li>Works 100% offline — forever</li>
      <li>Updates automatically when you’re online</li>
    </ul>

    <h2>Why This Matters</h2>
    <p>You might be:</p>
    <ul>
      <li>On a plane verifying a backup</li>
      <li>In a secure facility with no internet</li>
      <li>Using a fresh OS install with no browser extensions</li>
    </ul>

    <p>With AxelBase installed, you’re never stuck.</p>

    <p class="italic-note">The web isn’t just for browsing anymore. It’s for building real tools — that live on your device, forever.</p>
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