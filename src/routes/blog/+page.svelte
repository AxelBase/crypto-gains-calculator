<script lang="ts">
  import { base } from '$app/paths';
  import { fly, fade } from 'svelte/transition';

  const posts = [
    { href: '/blog/posts/post1', title: 'Understanding Crypto Capital Gains Taxation', description: 'An introduction to how crypto transactions are taxed, focusing on the distinction between short and long-term holdings.' },
    { href: '/blog/posts/post2', title: 'Why FIFO Matters for Crypto Taxes', description: 'Explains the First-In-First-Out cost basis method and why it is commonly used for accurate reporting.' },
    { href: '/blog/posts/post3', title: 'Short-Term vs Long-Term Holding Periods', description: 'A clear breakdown of the rules, including how holding days are precisely calculated.' },
    { href: '/blog/posts/post4', title: 'How the Calculator Matches Buys to Sells', description: 'Step-by-step details on the FIFO matching process for multiple buys.' },
    { href: '/blog/posts/post5', title: 'Handling Partial Sells', description: 'Learn how the tool manages leftover quantities from buy lots after partial sells.' },
    { href: '/blog/posts/post6', title: 'Calculating Gains and Losses Accurately', description: 'Deep dive into the gain/loss formula and proper aggregation.' },
    { href: '/blog/posts/post7', title: 'Interpreting the Results Breakdown', description: 'Guidance on reading the detailed transaction matches table.' }
  ];
</script>

<div class="container py-5">
  <header class="text-center mb-5" in:fade>
    <h1 class="display-3 fw-bold sapphire-text mb-3">Crypto Gains Insights</h1>
    <p class="lead text-muted mx-auto" style="max-width: 700px;">
      Deep dives into tax logic, FIFO mechanics, and best practices for modern crypto investors.
    </p>
  </header>

  <div class="row g-4">
    {#each posts as post, i}
      <div class="col-md-6 col-lg-4" in:fly={{ y: 20, delay: i * 100 }}>
        <a href="{base}{post.href}" class="card blog-card h-100 border-0 shadow-sm p-4 text-decoration-none">
          <div class="d-flex flex-column h-100">
            <span class="badge badge-sapphire mb-3">Educational Guide</span>
            <h4 class="fw-bold sapphire-text mb-3">{post.title}</h4>
            <p class="text-muted flex-grow-1">{post.description}</p>
            <div class="read-more mt-3">
              Read Article <span class="arrow">→</span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .sapphire-text { color: #1D1E33; }
  .blog-card {
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: white;
  }
  .blog-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(29, 30, 51, 0.1) !important;
  }
  .badge-sapphire { background: #eef4ff; color: #4A90E2; width: fit-content; padding: 6px 12px; border-radius: 10px; }
  .read-more { color: #4A90E2; font-weight: 700; }
  .blog-card:hover .arrow { transform: translateX(5px); display: inline-block; transition: transform 0.3s; }
</style>