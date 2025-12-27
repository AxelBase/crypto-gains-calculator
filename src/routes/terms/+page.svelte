<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Capital Gains Calculator</title>
  <meta name="description" content="Review the Terms and Conditions for using the Crypto Capital Gains Calculator, a free educational tool provided as-is." />
  <meta property="og:title" content="Terms and Conditions | Crypto Capital Gains Calculator" />
  <meta property="og:description" content="Review the Terms and Conditions for using the Crypto Capital Gains Calculator, a free educational tool provided as-is." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Last Updated: December 27, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Capital Gains Calculator</strong> (the "Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool. The Tool is provided free of charge for personal, non-commercial use as an educational resource.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a client-side web application that allows users to input cryptocurrency buy and sell transactions and estimate capital gains using the First-In-First-Out (FIFO) method with short-term and long-term holding period categorization. All processing occurs locally in your browser.</p>

    <h2>3. No Financial or Tax Advice</h2>
    <p><strong>Important:</strong> The Tool is for <em>educational and informational purposes only</em>. It does not constitute financial, investment, legal, or tax advice. Results are simplified estimates based on user-provided data and basic FIFO logic. They may not reflect actual tax obligations, which vary by jurisdiction, specific circumstances, and applicable laws.</p>
    <p>You are solely responsible for verifying results and consulting qualified professionals before making financial or tax decisions.</p>

    <h2>4. Accuracy and Limitations</h2>
    <ul>
      <li>The Tool implements a basic FIFO model and does not account for advanced scenarios such as wash sales, forks, airdrops, staking rewards, or jurisdiction-specific rules.</li>
      <li>Calculations depend entirely on the accuracy of data you input.</li>
      <li>We make no guarantees regarding the correctness, completeness, or suitability of results.</li>
    </ul>

    <h2>5. License and Use</h2>
    <p>We grant you a limited, non-exclusive, non-transferable license to use the Tool for personal purposes. You may not modify, distribute, sell, or create derivative works without permission. The Tool is open-source and available on GitHub under applicable license terms.</p>

    <h2>6. Disclaimer of Warranties</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied, including but not limited to accuracy, reliability, or fitness for a particular purpose. We do not warrant uninterrupted or error-free operation.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Tool, including errors in calculations or reliance on results.</p>

    <h2>8. Changes to Terms</h2>
    <p>We may modify these Terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by general principles of law applicable to open-source software and online tools, without regard to conflict of law provisions.</p>

    <h2>10. Contact</h2>
    <p>For questions about these Terms, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Thank you for using the Crypto Capital Gains Calculator responsibly. We provide it to help educate users about basic capital gains concepts.</p>
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