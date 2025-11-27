<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase – SHA-512 Hash Generator</title>
  <meta name="description" content="AxelBase collects zero data. Your files, text, and hashes never leave your browser. Full privacy policy." />
  <meta property="og:title" content="Privacy Policy | AxelBase SHA-512 Hash Generator" />
  <meta property="og:description" content="100% client-side. No logs. No tracking. Your data never leaves your device." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 27, 2025</p>

    <p><strong>AxelBase – SHA-512 Hash Generator</strong> is a completely client-side web application. This means <strong>we collect absolutely no personal data, usage statistics, or file contents</strong>. This Privacy Policy is intentionally short because there is almost nothing to disclose.</p>

    <h2>1. What We Do NOT Collect</h2>
    <ul>
      <li><strong>No personal information</strong> — names, emails, IP addresses, or device identifiers</li>
      <li><strong>No file contents</strong> — all hashing occurs locally in your browser using the Web Crypto API</li>
      <li><strong>No analytics or tracking</strong> — no Google Analytics, no cookies, no pixels, no telemetry</li>
      <li><strong>No server logs</strong> — the site is statically hosted on GitHub Pages with zero backend</li>
    </ul>

    <h2>2. How Your Data Is Handled</h2>
    <p>When you use AxelBase:</p>
    <ul>
      <li>Text input and file processing happen <strong>entirely in your browser’s memory</strong></li>
      <li>Large files are streamed in chunks — never fully loaded into RAM</li>
      <li>Copy-to-clipboard and export features use only native browser functions</li>
      <li>All operations are <strong>stateless and ephemeral</strong></li>
    </ul>
    <p>Your data never touches any server — not ours, not a CDN, not a third party.</p>

    <h2>3. Third-Party Services</h2>
    <p>We use only two CDNs for performance:</p>
    <ul>
      <li>Bootstrap 5 CSS/JS (jsDelivr)</li>
      <li>Bootstrap Icons (jsDelivr)</li>
    </ul>
    <p>These load static files only. They do not set cookies or track users when used on AxelBase.</p>

    <h2>4. Local Storage & PWA</h2>
    <p>When installed as a Progressive Web App, AxelBase may cache assets locally for offline use. <strong>No user-generated content is ever persisted</strong> unless you explicitly use browser features (e.g., bookmarks).</p>

    <h2>5. Security & Responsibility</h2>
    <p>While we cannot access your data, you remain responsible for:</p>
    <ul>
      <li>Using the tool on a trusted device</li>
      <li>Not sharing sensitive hashes publicly</li>
      <li>Keeping your browser updated</li>
    </ul>

    <h2>6. Changes to This Policy</h2>
    <p>Any updates will appear on this page with a revised effective date.</p>

    <p class="italic-note">
      <strong>Your privacy is not a feature — it’s the entire architecture.</strong><br>
      By using AxelBase, you agree to this zero-data-collection policy.
    </p>
  </article>
</div>

<style>
  /* Same styles as your blog posts */
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem; }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose h1 { font-size: 2.5rem; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); font-size: 1.1rem; }
</style>