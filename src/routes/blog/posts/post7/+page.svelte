<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Built with SvelteKit & Bootstrap: 100% Open Source | AxelBase Blog</title>
  <meta name="description" content="Explore the tech stack behind AxelBase: SvelteKit, Bootstrap 5, Web Crypto API — all open source, auditable, and deployed on GitHub Pages." />
  <meta property="og:title" content="AxelBase Is 100% Open Source — Fork It Today" />
  <meta property="og:description" content="No minified bundles. No secrets. Full source available on GitHub." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Open Source & Transparent</p>
  </div>

  <article class="prose">
    <h1>Built with SvelteKit & Bootstrap: Open Source & Transparent</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>AxelBase isn’t just open source — it’s <strong>designed to be understood</strong>.</p>

    <h2>Tech Stack (All Open Source)</h2>
    <ul>
      <li><strong>SvelteKit</strong> – The fastest, most developer-friendly framework</li>
      <li><strong>Bootstrap 5</strong> – Clean, accessible, no Tailwind bloat</li>
      <li><strong>Web Crypto API</strong> – Native browser cryptography</li>
      <li><strong>GitHub Pages</strong> – Free, static, globally cached</li>
    </ul>

    <h2>Why Transparency Matters</h2>
    <p>When you’re hashing private keys, seed phrases, or legal documents, you need to know exactly what the code is doing. With AxelBase:</p>
    <ul>
      <li>View source → see everything</li>
      <li>No minified production bundles</li>
      <li>No external dependencies at runtime</li>
      <li>Fork, modify, self-host in minutes</li>
    </ul>

    <p>Repository: <a href="https://github.com/axelbase/sha512-hash-generator" target="_blank">github.com/yourusername/sha512-hash-generator</a></p>

    <p class="italic-note">Trust through transparency. That’s the AxelBase promise.</p>
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