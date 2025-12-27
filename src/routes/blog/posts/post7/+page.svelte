<script lang="ts">
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Calculating Gains and Losses Accurately | Crypto Gains Blog</title>
  <meta name="description" content="Explore the precise gain and loss formula used by the calculator, including support for negative results and proper aggregation by holding period." />
  <meta property="og:title" content="Calculating Gains and Losses Accurately | Crypto Gains Blog" />
  <meta property="og:description" content="Explore the precise gain and loss formula used by the calculator, including support for negative results and proper aggregation by holding period." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 post-layout" in:fade={{ duration: 600 }}>
  <nav class="breadcrumbs mb-4" aria-label="breadcrumb">
    <a href="{base}/blog">Blog</a>
    <span class="mx-2">/</span>
    <span class="text-muted">Calculating Gains and Losses Accurately</span>
  </nav>

  <article class="card main-post-card border-0 shadow-lg p-4 p-md-5">
    <h1 class="display-4 fw-bold mb-3 sapphire-text">Calculating Gains and Losses Accurately</h1>
    <p class="post-meta mb-5">Published: December 27, 2025</p>

    <div class="prose-content">
      <p class="lead">The core purpose of any capital gains tool is to determine how much profit or loss resulted from each cryptocurrency transaction. This calculator applies a straightforward yet precise formula to every matched buy-sell pair.</p>
      
      <p>For each portion of a sell matched to a prior buy, the gain or loss is calculated as the sell price minus the buy price, multiplied by the quantity involved.</p>
      
      <h2 class="mt-5 fw-bold sapphire-text">The Basic Formula</h2>
      <p>Gain equals (sell price minus buy price) times quantity. When sell price exceeds buy price, the result is positive, indicating a profit. When sell price is lower, the result is negative, representing a loss.</p>
      
      <div class="accent-callout my-5 p-4 rounded-4 shadow-sm">
        <h5 class="fw-bold">Handling Losses</h5>
        <p class="mb-0">Negative results are fully supported and displayed clearly. Losses are aggregated separately for short-term and long-term categories, allowing you to see potential offsets.</p>
      </div>

      <h2 class="fw-bold sapphire-text">Aggregation by Holding Period</h2>
      <ul class="custom-list">
        <li>All individual gains and losses are summed within their respective categories.</li>
        <li>Short-term for holdings under one year.</li>
        <li>Long-term for one year or more.</li>
      </ul>

      <p>The final summary shows total short-term and long-term gain or loss, giving a complete picture of taxable exposure.</p>

      <p>Calculations use full precision internally before displaying results rounded to two decimal places for clarity. Even small errors can compound into significant tax discrepancies, especially with large volumes.</p>

      <p>Whether realizing substantial profits or offsetting losses, users can rely on the calculator to reflect true financial outcomes based on actual buy and sell prices.</p>

      <p class="italic-note mt-5 pt-4 text-center text-muted border-top">
        Accurate gain tracking supports better financial planning and regulatory compliance.
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