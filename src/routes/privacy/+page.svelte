<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Capital Gains Calculator</title>
  <meta name="description" content="Read our Privacy Policy to understand how the Crypto Capital Gains Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:title" content="Privacy Policy | Crypto Capital Gains Calculator" />
  <meta property="og:description" content="Read our Privacy Policy to understand how the Crypto Capital Gains Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 27, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Capital Gains Calculator</strong>, a free, open-source web utility that helps users estimate cryptocurrency capital gains using the FIFO method. This tool operates entirely in your browser with a strict <strong>privacy-by-design</strong> philosophy. We do not collect, store, transmit, or process any personal data or transaction information you enter. This Privacy Policy explains our practices clearly so you can use the calculator with complete confidence.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The calculator is built as a fully <strong>client-side static application</strong>. This means all calculations, transaction input, and results happen exclusively on your device. We do not collect:</p>
    <ul>
      <li><strong>Personal information</strong> such as names, email addresses, IP addresses, or device identifiers.</li>
      <li><strong>Transaction data</strong> including dates, quantities, prices, or any cryptocurrency details you input.</li>
      <li><strong>Usage analytics</strong> — no tracking pixels, cookies for analytics, or server logs.</li>
      <li><strong>Browser or device data</strong> beyond what is required for basic page rendering.</li>
    </ul>
    <p>Because everything runs locally in your browser, your data never leaves your device and we have no access to it.</p>

    <h2>3. How the Tool Works</h2>
    <p>When you use the Crypto Capital Gains Calculator:</p>
    <ul>
      <li>All FIFO matching, holding period calculations, and gain/loss computations are performed using JavaScript directly in your browser.</li>
      <li>No data is sent to any server, cloud service, or third party at any time.</li>
      <li>Any temporary data (e.g., your current transaction list) exists only in browser memory and is cleared when you reset, close the tab, or refresh the page.</li>
    </ul>
    <p>This <strong>zero-data-collection model</strong> ensures maximum privacy, especially important when handling potentially sensitive financial information.</p>

    <h2>4. Third-Party Services</h2>
    <p>We do not integrate any third-party analytics, advertising, or tracking services. The application uses only Bootstrap via CDN for styling and core browser APIs for functionality. These CDNs deliver static files and do not track user activity or content.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>The calculator <strong>does not use cookies</strong>, localStorage for persistence, sessionStorage beyond temporary needs, or any form of tracking technology. Your session is completely stateless from our perspective.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is transmitted or stored by us, the primary security responsibility lies with your device and browser. We recommend using an up-to-date browser and secure connection (HTTPS) when accessing the tool.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy occasionally. Changes will be reflected on this page with an updated effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note"><strong>Your privacy is our priority.</strong> By design, we collect nothing — so there is nothing to share, sell, or compromise.</p>
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