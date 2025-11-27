<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Hex vs Base64 vs Base64url: When to Use Which Format | AxelBase Blog</title>
  <meta name="description" content="Understand the differences between Hex, Base64, and Base64url encodings for SHA-512 hashes — and exactly when to use each in real-world scenarios." />
  <meta property="og:title" content="Hex vs Base64 vs Base64url: The Definitive Guide" />
  <meta property="og:description" content="From JWTs to file verification — choose the right SHA-512 output format every time." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Hex vs Base64 vs Base64url</p>
  </div>

  <article class="prose">
    <h1>Hex vs Base64 vs Base64url: When to Use Which Format</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>AxelBase displays your SHA-512 hash in three formats simultaneously. But they’re not interchangeable. Choosing the wrong one can break URLs, JWTs, or verification scripts.</p>

    <h2>1. Hexadecimal (128 characters)</h2>
    <p>The classic. Human-readable, case-insensitive, and universally supported.</p>
    <ul>
      <li>Used by: Linux distros, GPG, Windows certutil, GitHub release checksums</li>
      <li>Perfect for: terminal commands, documentation, text files</li>
      <li>Downside: 100% size overhead (512 bits to 1024 bits of text)</li>
    </ul>

    <h2>2. Base64 (88 characters, ends with =)</h2>
    <p>33% smaller than hex. Standard in emails, HTTP headers, and data URIs.</p>
    <ul>
      <li>Used by: MIME, JSON Web Tokens (JWS), some APIs</li>
      <li>Contains: <code>+</code> and <code>/</code> — must be URL-encoded in links</li>
      <li>Padding: uses <code>=</code> to reach multiple of 4</li>
    </ul>

    <h2>3. Base64url (86–88 characters, no padding)</h2>
    <p>The URL-safe variant. Designed for web tokens and APIs.</p>
    <ul>
      <li>Replaces <code>+</code> to <code>-</code> and <code>/</code> to <code>_</code></li>
      <li>Removes <code>=</code> padding</li>
      <li>Used by: JWT (JSON Web Tokens), OAuth2, OpenID Connect, modern APIs</li>
    </ul>

    <h2>Quick Decision Guide</h2>
    <table class="table table-bordered text-start" style="width:100%; margin: 2rem 0;">
      <thead class="table-primary">
        <tr>
          <th>Use Case</th>
          <th>Best Format</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Verifying a Linux ISO</td><td><strong>Hex</strong></td></tr>
        <tr><td>Pasting into terminal</td><td><strong>Hex</strong></td></tr>
        <tr><td>Storing in JSON or database</td><td><strong>Base64</strong></td></tr>
        <tr><td>Using in URLs or JWTs</td><td><strong>Base64url</strong></td></tr>
        <tr><td>Sharing via link</td><td><strong>Base64url</strong></td></tr>
      </tbody>
    </table>

    <p>AxelBase gives you all three instantly — so you’re never stuck with the wrong format.</p>

    <p class="italic-note">One hash. Three formats. Zero excuses.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem; }
  .breadcrumbs a { color: var(--accent-secondary); }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
  .prose ul { list-style-type: 'right arrow '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); }
  .table th, .table td { padding: 0.75rem; vertical-align: middle; }
</style>