<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

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

<header class="custom-navbar sticky-top">
  <nav class="container d-flex justify-content-between align-items-center">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 40px; width: auto;" />
        <span class="ms-2 fs-4 fw-bold text-white">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown mt-2 shadow-lg" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount crypto-link"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex">
      <li><a class="nav-link" href="{base}/#home">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="relative py-3 bg-white border-top">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <p class="mb-0 text-muted">
      &copy; {currentYear} <strong>AxelBase</strong> Crypto Capital Gains Calculator
    </p>
    <div class="d-flex gap-4">
      <a href="{base}/privacy" class="text-decoration-none text-muted small">Privacy Policy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted small">Terms of Service</a>
    </div>
  </div>
</footer>

<style>
  /* BMAC Button - Adapted to File 2 Sapphire Theme */
  .bmac-button {
    background: var(--accent-blue);
    font-size: 0.9rem;
    transition: var(--transition);
  }

  .bmac-button:hover {
    background: #4a4ea3; /* Slightly lighter than accent-blue */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Dropdown Styling */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 240px;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(29, 30, 51, 0.1);
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--sapphire);
    text-decoration: none;
    font-size: 0.95rem;
    transition: var(--transition);
    font-weight: 500;
  }

  .bmac-dropdown a:hover {
    background: #f8f9fa;
    color: var(--accent-blue);
    padding-left: 25px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--accent-blue);
    font-size: 1.05rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    border-top: 1px solid #eee;
    justify-content: center !important;
  }

  .crypto-link {
    background-color: #fff9f0; /* Subtle hint for crypto */
    color: #f7931a !important; /* Bitcoin Orange */
  }

  .crypto-link:hover {
    background-color: #fff2e0 !important;
  }

  /* Existing Nav Link Overrides */
  .nav-link {
    color: rgba(255, 255, 255, 0.8) !important;
    font-weight: 500;
    margin-left: 1.5rem;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--text-light) !important;
    transform: scale(1.05);
  }
</style>