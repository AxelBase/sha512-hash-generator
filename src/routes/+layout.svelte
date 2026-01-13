<script lang="ts">
  import { base } from '$app/paths';
  import { fly, fade } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();
  let isDropdownOpen = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<div class="d-flex flex-column min-vh-100">
  <header class="custom-navbar sticky-top shadow-sm">
    <nav class="container d-flex justify-content-between align-items-center py-3">
      
      <div class="d-flex align-items-center gap-3">
        <a href="{base}/" class="d-flex align-items-center text-decoration-none">
          <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 40px; width: auto;" />
          <span class="navbar-brand-text ms-2" style="color: var(--pearl-gold); font-size: 1.5rem;">AxelBase</span>
        </a>

        <div class="position-relative ms-3" use:clickOutside on:click_outside={closeDropdown}>
          <button class="bmac-button d-flex align-items-center gap-2" on:click={toggleDropdown}>
            <i class="bi bi-cup-hot-fill"></i>
            <span class="d-none d-md-inline">Buy me a coffee</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 300 }}>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="price">$3</span><span>Small Coffee</span>
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="price">$5</span><span>Medium Coffee</span>
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="price">$10</span><span>Large Coffee</span>
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amt">
                Own Amount
              </a>
                            <a href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee" class="crypto-link">
                <i class="bi bi-currency-bitcoin"></i> Bitcoin
              </a>

            </div>
          {/if}
        </div>
      </div>

      <ul class="d-none d-lg-flex align-items-center gap-4 m-0 list-unstyled">
        <li><a class="nav-link-fancy" href="{base}/">Home</a></li>
        <li><a class="nav-link-fancy" href="{base}/#about">About</a></li>
        <li><a class="nav-link-fancy" href="{base}/#how-to-use">How to use</a></li>
        <li><a class="nav-link-fancy" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link-fancy" href="{base}/blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex-grow-1 main-content">
    <slot />
  </main>

  <footer class="py-3">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p class="m-0 text-muted">© AxelBase SHA-512 Hash Generator – {currentYear}</p>
      <div class="d-flex gap-4">
        <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
        <a href="{base}/terms" class="footer-link">Terms & Conditions</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .custom-navbar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--pearl-gold-alpha);
  }

  .nav-link-fancy {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition-bubbly);
    padding: 8px 16px;
    border-radius: var(--radius-pill);
  }

  .nav-link-fancy:hover {
    color: var(--pearl-gold);
    background: var(--pearl-gold-alpha);
    transform: translateY(-2px);
  }

  .bmac-dropdown {
    position: absolute;
    top: calc(100% + 15px);
    left: 0;
    width: 220px;
    background: white;
    border-radius: 20px;
    box-shadow: var(--shadow-hover);
    padding: 10px;
    z-index: 1100;
    border: 1px solid var(--pearl-gold-alpha);
  }

  .bmac-dropdown a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--pearl-gold-soft);
    color: var(--pearl-gold);
    transform: translateX(5px);
  }

  .bmac-dropdown .price {
    font-weight: 700;
    color: var(--pearl-gold);
  }

  .custom-amt {
    border-top: 1px solid #eee;
    margin-top: 5px;
    justify-content: center !important;
    font-style: italic;
  }

  .footer-link {
    color: var(--pearl-gold);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
    .crypto-link { border-top: 1px solid var(--glass-border); margin-top: 5px; color: #f7931a !important; }
</style>