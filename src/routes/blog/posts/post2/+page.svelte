<script lang="ts">
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>How the Calculator Matches Buys to Sells | Crypto Gains Blog</title>
  <meta name="description" content="Discover the step-by-step FIFO process used to match sell transactions to previous buy lots for accurate capital gains calculation." />
  <meta property="og:title" content="How the Calculator Matches Buys to Sells | Crypto Gains Blog" />
  <meta property="og:description" content="Discover the step-by-step FIFO process used to match sell transactions to previous buy lots for accurate capital gains calculation." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 post-layout" in:fade={{ duration: 600 }}>
  <nav class="breadcrumbs mb-4" aria-label="breadcrumb">
    <a href="{base}/blog">Blog</a>
    <span class="mx-2">/</span>
    <span class="text-muted">How the Calculator Matches Buys to Sells</span>
  </nav>

  <article class="card main-post-card border-0 shadow-lg p-4 p-md-5">
    <h1 class="display-4 fw-bold mb-3 sapphire-text">How the Calculator Matches Buys to Sells</h1>
    <p class="post-meta mb-5">Published: December 27, 2025</p>

    <div class="prose-content">
      <p class="lead">Accurate capital gains calculation depends entirely on correctly pairing each sell with the right prior buy transactions. This calculator uses strict First-In-First-Out (FIFO) logic to ensure consistent, transparent, and tax-compliant matching every time.</p>
      
      <p>When you sell cryptocurrency, the tool automatically looks at all your previous unmatched buy lots and consumes them in chronological order — starting with the oldest purchase first.</p>
      
      <h2 class="mt-5 fw-bold sapphire-text">The Step-by-Step Matching Process</h2>
      <p>For every sell, the calculator begins with the earliest remaining buy lot. It uses as much of that lot as needed to cover the sell quantity. If the oldest lot is fully consumed, it moves to the next oldest, continuing until the entire sell amount is matched.</p>
      
      <div class="accent-callout my-5 p-4 rounded-4 shadow-sm">
        <h5 class="fw-bold">Partial Matches Are Fully Supported</h5>
        <p class="mb-0">A single sell can draw from multiple older buys, and a single buy lot can be split across multiple future sells. Remaining quantities stay in the queue with their original date and cost basis intact.</p>
      </div>

      <h2 class="fw-bold sapphire-text">Why This Matters for Holding Periods</h2>
      <p>Each matched portion inherits the exact acquisition date of its buy lot. This precise tracking ensures correct classification: older lots often qualify for long-term rates, while newer ones remain short-term. Incorrect matching could dramatically change your estimated tax liability.</p>

      <h2 class="fw-bold sapphire-text">Real-World Example</h2>
      <ul class="custom-list">
        <li>You buy 2 BTC in January 2024 at $40,000 each.</li>
        <li>You buy 1 BTC in July 2024 at $60,000.</li>
        <li>In March 2025, you sell 2.5 BTC.</li>
        <li>The calculator uses both January coins first (long-term), then 0.5 from the July purchase (short-term).</li>
      </ul>

      <p>The detailed breakdown table shows every individual match, so you can verify exactly how each portion of your sell was paired and taxed.</p>

      <p class="italic-note mt-5 pt-4 text-center text-muted border-top">
        Strict FIFO matching provides the transparency and consistency most tax authorities expect by default.
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