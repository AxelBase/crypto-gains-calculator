<script lang="ts">
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Handling Partial Sells and Remaining Lots | Crypto Gains Blog</title>
  <meta name="description" content="Learn how the calculator manages partial sells by splitting buy lots and preserving remaining quantities for future transactions." />
  <meta property="og:title" content="Handling Partial Sells and Remaining Lots | Crypto Gains Blog" />
  <meta property="og:description" content="Learn how the calculator manages partial sells by splitting buy lots and preserving remaining quantities for future transactions." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 post-layout" in:fade={{ duration: 600 }}>
  <nav class="breadcrumbs mb-4" aria-label="breadcrumb">
    <a href="{base}/blog">Blog</a>
    <span class="mx-2">/</span>
    <span class="text-muted">Handling Partial Sells and Remaining Lots</span>
  </nav>

  <article class="card main-post-card border-0 shadow-lg p-4 p-md-5">
    <h1 class="display-4 fw-bold mb-3 sapphire-text">Handling Partial Sells and Remaining Lots</h1>
    <p class="post-meta mb-5">Published: December 27, 2025</p>

    <div class="prose-content">
      <p class="lead">Most cryptocurrency investors don’t sell entire buy lots at once. Taking profits gradually or rebalancing requires partial sells — and accurate tracking of what remains is essential for correct capital gains calculation.</p>
      
      <p>This calculator handles partial sells seamlessly under strict FIFO rules, ensuring every remaining portion of a buy lot retains its original acquisition date and cost basis.</p>
      
      <h2 class="mt-5 fw-bold sapphire-text">How Partial Consumption Works</h2>
      <p>When you sell less than a full lot, the tool consumes only the required amount from the oldest available buy first. The leftover quantity stays in the FIFO queue exactly as it was — preserving its original purchase date for future matching.</p>
      
      <div class="accent-callout my-5 p-4 rounded-4 shadow-sm">
        <h5 class="fw-bold">Remaining Lots Keep Aging</h5>
        <p class="mb-0">Because unsold portions retain their original date, they continue progressing toward long-term status. This accurate aging prevents premature short-term classification on future sells.</p>
      </div>

      <h2 class="fw-bold sapphire-text">Chain of Partial Sells Example</h2>
      <ul class="custom-list">
        <li>Buy 3 BTC in March 2024 at $50,000 each.</li>
        <li>Sell 1 BTC in September 2024 → 2 BTC remain from March lot (still long-term eligible later).</li>
        <li>Sell 0.8 BTC in January 2025 → uses 0.8 from remaining March lot.</li>
        <li>Final 1.2 BTC from March 2024 are still available for future sells with original date.</li>
      </ul>

      <h2 class="fw-bold sapphire-text">Why Accurate Remainder Tracking Matters</h2>
      <p>Errors in handling leftovers can compound over time, leading to incorrect holding period classification and distorted tax estimates. Proper remainder management ensures every future sell reflects true historical cost and timing.</p>

      <p>Whether you’re dollar-cost averaging, taking periodic profits, or managing a large portfolio, the calculator’s robust partial-sell handling delivers reliable results without manual tracking.</p>

      <p class="italic-note mt-5 pt-4 text-center text-muted border-top">
        Precise management of remaining lots is the foundation of trustworthy long-term tax estimation.
      </p>
    </div>
  </article>
</div>

<style>
  :root {
    --sapphire: #1D1E33;
    --accent-blue: #4A90E2;
  }
  .post-layout { max-width: 900px; }
  .main-post-card { border-radius: 35px; background: white; }
  .sapphire-text { color: var(--sapphire); }
  .post-meta { font-size: 0.9rem; color: #888; border-bottom: 1px solid #eee; padding-bottom: 15px; }
  .prose-content p { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 1.5rem; }
  
  .accent-callout { background: #f8f9ff; border-left: 6px solid var(--accent-blue); }
  .custom-list { list-style: none; padding-left: 0; }
  .custom-list li { position: relative; padding-left: 30px; margin-bottom: 12px; font-size: 1.1rem; color: #444; }
  .custom-list li::before { content: "→"; position: absolute; left: 0; color: var(--accent-blue); font-weight: bold; }

  .breadcrumbs a { text-decoration: none; color: var(--accent-blue); font-weight: 600; }
</style>