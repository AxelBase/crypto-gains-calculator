<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
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
        <button class="btn btn-outline-light btn-sm rounded-pill px-3 d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <span style="font-size: 1.2rem;">☕</span>
          <span class="d-none d-md-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div 
            class="position-absolute mt-2 p-2 bg-white rounded-4 shadow-lg" 
            style="z-index: 1000; min-width: 120px; left: 0;"
            transition:fly={{ y: -10, duration: 250 }}
          >
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                class="dropdown-item py-2 px-3 rounded-3 text-dark text-center fw-bold"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
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

<footer class="releative py-3 bg-white border-top">
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
  .dropdown-item:hover {
    background-color: #f8f9fa;
    color: var(--sapphire) !important;
  }
</style>