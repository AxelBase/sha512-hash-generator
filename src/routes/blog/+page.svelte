<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Why SHA-512? The Gold Standard in 2025', description: 'Explore why SHA-512 remains the most trusted and widely used cryptographic hash function for integrity verification.' },
    { href: '/blog/posts/post2', title: 'Client-Side Hashing: True Privacy in the Browser', description: 'How AxelBase ensures no data ever leaves your device — unlike online hash tools that log your inputs.' },
    { href: '/blog/posts/post3', title: 'Streaming Large Files: How AxelBase Handles 10GB+ Files', description: 'Deep dive into Web Crypto streaming and memory-efficient hashing for massive files without freezing.' },
    { href: '/blog/posts/post4', title: 'Hex vs Base64 vs Base64url: When to Use Which Format', description: 'A practical guide to choosing the right output format for blockchain, APIs, JWTs, and file verification.' },
    { href: '/blog/posts/post5', title: 'Verifying Downloads with SHA-512: Step-by-Step', description: 'How to use AxelBase to confirm the integrity of Linux ISOs, software releases, and blockchain data.' },
    { href: '/blog/posts/post6', title: 'Offline-First Design: Installable PWA Explained', description: 'Turn AxelBase into a desktop/mobile app — works forever without internet after first visit.' },
    { href: '/blog/posts/post7', title: 'Built with SvelteKit & Bootstrap: Open Source & Transparent', description: 'Why we chose SvelteKit, how it works on GitHub Pages, and how you can fork and improve it.' },
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase – SHA-512 Hash Generator</title>
  <meta name="description" content="Insights, tutorials, and deep dives into SHA-512, client-side cryptography, and privacy-first tools." />
</svelte:head>

<div class="container fade-in blog-index py-5">
  <header class="blog-header text-center mb-5">
    <h1><i class="bi bi-journal-code"></i> AxelBase Blog</h1>
    <p class="subtitle lead">
      Deep dives, tutorials, and best practices for secure hashing, privacy, and modern web cryptography.
      Built for developers, security enthusiasts, and privacy advocates.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card h-100 shadow-sm border-0 text-decoration-none">
        <div class="card-body d-flex flex-column">
          <h2 class="post-title h5 fw-bold text-primary">{post.title}</h2>
          <p class="post-description text-muted flex-grow-1 small">{post.description}</p>
          <span class="read-more text-primary fw-semibold mt-3">
            Read Article
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }

  .blog-header h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  .subtitle {
    max-width: 800px;
    margin: 0 auto;
    color: var(--bs-secondary);
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
    background: var(--bs-card-bg);
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }

  .read-more {
    transition: transform 0.2s ease;
  }

  @media (max-width: 768px) {
    .blog-header h1 { font-size: 2.5rem; }
  }
</style>