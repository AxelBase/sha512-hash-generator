<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  // PayPal Configuration
  const paypalUsername = 'AxelLab427'; // UPDATE THIS LATER
  const donationAmounts = [1, 3, 5, 10];
  
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click Outside Action
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
  
  const currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <meta name="theme-color" content="#999950" />
</svelte:head>

<div style="display: flex; flex-direction: column; min-height: 100vh;">

  <header class="custom-navbar">
    <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">
      
      <div style="display: flex; align-items: center; gap: 0.8rem;">
        <a href="{base}/" aria-label="Home">
          <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        </a>
        <a class="navbar-brand-text" href="{base}/" style="text-decoration: none;">AxelBase</a>
      </div>

      <ul style="list-style: none; display: flex; align-items: center; gap: 1rem; margin: 0;">
        <li class="d-none d-md-block"><a class="nav-link" href="{base}/">Home</a></li>
        <li class="d-none d-md-block"><a class="nav-link" href="{base}/#about">About</a></li>
        <li class="d-none d-md-block"><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
        <li class="d-none d-md-block"><a class="nav-link" href="{base}/#faq">FAQ</a></li>
        <li class="d-none d-md-block"><a class="nav-link" href="{base}/blog">Blog</a></li>

        <li class="nav-item bmac-nav-item" use:clickOutside on:click_outside={closeDropdown}>
          <button class="bmac-button" on:click={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
            </svg>
            <span class="d-none d-sm-inline">Buy me a coffee</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
              {#each donationAmounts as amount}
                <a 
                  href="https://paypal.me/{paypalUsername}/{amount}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  on:click={closeDropdown}
                >
                  ${amount}
                </a>
              {/each}
            </div>
          {/if}
        </li>
      </ul>
    </nav>
  </header>

  <main style="flex: 1;">
    <slot />
  </main>

  <footer class="text-center">
    <div class="container">
      <p class="mb-1 text-muted">© AxelBase SHA-512 Hash Generator – {currentYear}</p>
      <div class="d-flex justify-content-center gap-3">
        <a href="{base}/privacy">Privacy Policy</a>
        <span>•</span>
        <a href="{base}/terms">Terms of Service</a>
      </div>
    </div>
  </footer>

</div>