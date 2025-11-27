<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AxelBase – SHA-512 Hash Generator</title>
  <meta name="description" content="Terms of use for AxelBase SHA-512 Hash Generator — free, open-source, as-is software." />
  <meta property="og:title" content="Terms and Conditions | AxelBase" />
  <meta property="og:description" content="Free to use, modify, and distribute. No warranty. Use at your own risk." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>
    <p class="post-meta">Effective Date: November 27, 2025</p>

    <p>By using <strong>AxelBase – SHA-512 Hash Generator</strong> ("the Service"), you agree to these Terms and Conditions.</p>

    <h2>1. Nature of the Service</h2>
    <p>AxelBase is a <strong>free, open-source, client-side web application</strong> hosted on GitHub Pages. It performs SHA-512 hashing entirely in your browser using the Web Crypto API. No data is transmitted to any server.</p>

    <h2>2. License</h2>
    <p>The Service is released under the <strong>MIT License</strong>. You are free to:</p>
    <ul>
      <li>Use it for personal or commercial purposes</li>
      <li>Modify, fork, or redistribute the source code</li>
      <li>Host your own version</li>
    </ul>

    <h2>3. No Warranty</h2>
    <p><strong>The Service is provided "AS IS" without warranty of any kind</strong>, express or implied, including but not limited to:</p>
    <ul>
      <li>Accuracy of hash results (though it uses the standard Web Crypto API)</li>
      <li>Fitness for a particular purpose</li>
      <li>Non-infringement</li>
      <li>Availability or uptime</li>
    </ul>

    <h2>4. Limitation of Liability</h2>
    <p>In no event shall the authors or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
    <ul>
      <li>Incorrect hash verification</li>
      <li>Data loss or corruption</li>
      <li>Security incidents</li>
      <li>Use of the tool with sensitive material</li>
    </ul>

    <h2>5. Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use the Service for illegal purposes</li>
      <li>Attempt to overload or attack the hosted instance</li>
      <li>Misrepresent the Service as your own without attribution</li>
    </ul>

    <h2>6. Changes to Terms</h2>
    <p>We may modify these terms at any time. Continued use constitutes acceptance.</p>

    <h2>7. Governing Law</h2>
    <p>These terms are governed by the laws of open-source goodwill and common sense.</p>

    <p class="italic-note">
      <strong>AxelBase is built for the community, by the community.</strong><br>
      Use responsibly. Share freely. Improve openly.
    </p>
  </article>
</div>

<style>
  /* Reuse same styles as Privacy Policy */
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