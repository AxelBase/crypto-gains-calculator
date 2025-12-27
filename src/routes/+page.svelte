<script>
  import { calculateGains } from '$lib/calculator.js';
  import { fly, fade, scale } from 'svelte/transition';

  let transactions = [{ date: '', type: 'buy', quantity: '', price: '' }];
  let results = null;
  let errorMessage = '';

  function addTransaction() {
    transactions = [...transactions, { date: '', type: 'buy', quantity: '', price: '' }];
  }

  function removeTransaction(index) {
    transactions = transactions.filter((_, i) => i !== index);
  }

  function handleCalculate(event) {
    event.preventDefault();
    for (const trans of transactions) {
      if (!trans.date || !trans.type || !trans.quantity || !trans.price) {
        errorMessage = 'All fields are required.';
        return;
      }
    }
    errorMessage = '';
    const parsedTransactions = transactions.map(t => ({
      date: new Date(t.date),
      type: t.type,
      quantity: parseFloat(t.quantity),
      price: parseFloat(t.price)
    }));
    results = calculateGains(parsedTransactions);
  }

  function reset() {
    transactions = [{ date: '', type: 'buy', quantity: '', price: '' }];
    results = null;
    errorMessage = '';
  }
</script>

<svelte:head>
  <title>Crypto Capital Gains Calculator | Private FIFO Tax Tool</title>
  <meta name="title" content="Crypto Capital Gains Calculator | Private FIFO Tax Tool" />
  <meta name="description" content="A free, private, client-side calculator for cryptocurrency capital gains. Calculate FIFO cost basis, short-term vs long-term holdings, and tax liabilities locally." />
  <meta name="keywords" content="crypto tax calculator, FIFO calculator, cryptocurrency capital gains, bitcoin tax tool, private crypto calculator" />
  <link rel="canonical" href="https://axelbase.github.io/crypto-gains-calculator/" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://axelbase.github.io/crypto-gains-calculator/" />
  <meta property="og:title" content="Crypto Capital Gains Calculator | Private FIFO Tax Tool" />
  <meta property="og:description" content="Calculate your crypto capital gains with 100% privacy. Our client-side FIFO tool ensures your data never leaves your browser." />
  <meta property="og:image" content="https://axelbase.github.io/crypto-gains-calculator/AxelLab-Logo1.jpg" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://axelbase.github.io/crypto-gains-calculator/" />
  <meta property="twitter:title" content="Crypto Capital Gains Calculator | Private FIFO Tax Tool" />
  <meta property="twitter:description" content="Free, open-source FIFO matching for crypto investors. Private-by-design capital gains estimation." />
  <meta property="twitter:image" content="https://axelbase.github.io/crypto-gains-calculator/AxelLab-Logo1.jpg" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Crypto Capital Gains Calculator",
      "description": "A client-side tool for calculating cryptocurrency capital gains using the FIFO method with short-term and long-term categorization.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "FIFO Cost Basis Matching",
        "Short-term vs Long-term Holding Analysis",
        "100% Client-side Privacy",
        "Partial Lot Splitting Logic"
      ],
      "author": {
        "@type": "Organization",
        "name": "AxelBase"
      }
    }
  </script>
</svelte:head>

<div class="container py-5" id="home">
  <div class="text-center mb-5" in:fade={{ duration: 800 }}>
    <h1 class="display-3 fw-bold mb-3 main-title">AxelBase Calculator</h1>
    <p class="lead text-muted mx-auto" style="max-width: 600px;">
      Professional-grade crypto capital gains tracking with a smooth, modern interface.
    </p>
  </div>

  {#if errorMessage}
    <div class="alert alert-custom shadow-sm mb-4" in:fly={{ y: -20 }}>
      {errorMessage}
    </div>
  {/if}

  <div class="card main-card border-0 shadow-lg p-4 mb-5">
    <form on:submit={handleCalculate}>
      <div class="table-responsive">
        <table class="table custom-input-table align-middle">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price (USD)</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {#each transactions as trans, i (i)}
              <tr out:fade={{ duration: 200 }}>
                <td><input type="date" bind:value={trans.date} class="form-control bubbly-input" required /></td>
                <td>
                  <select bind:value={trans.type} class="form-select bubbly-input" required>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>
                </td>
                <td><input type="number" bind:value={trans.quantity} min="0.0001" step="0.0001" class="form-control bubbly-input" required /></td>
                <td><input type="number" bind:value={trans.price} min="0" step="0.01" class="form-control bubbly-input" required /></td>
                <td class="text-center">
                  {#if i > 0}
                    <button type="button" class="btn btn-remove" on:click={() => removeTransaction(i)}>✕</button>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <div class="mt-4 d-flex flex-wrap gap-3">
        <button type="button" class="btn btn-outline-sapphire px-4 py-2" on:click={addTransaction}>+ Add Entry</button>
        <button type="submit" class="btn btn-primary-sapphire px-5 py-2">Calculate Gains</button>
        <button type="button" class="btn btn-soft px-4 py-2" on:click={reset}>Reset</button>
      </div>
    </form>
  </div>

  {#if results}
    <div class="results-wrapper mt-5" in:fly={{ y: 50, duration: 800 }}>
      <div class="d-flex align-items-center mb-4 gap-3">
        <div class="accent-line"></div>
        <h2 class="fw-bold m-0" style="color: #1D1E33;">Calculation Results</h2>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6" in:scale={{ delay: 200, start: 0.95 }}>
          <div class="card result-card short-term shadow-sm h-100 border-0 p-4">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <span class="badge badge-soft-blue mb-2">Short Term</span>
                <h2 class="display-6 fw-bold mb-0 text-dark">${results.shortTermTotal}</h2>
                <p class="text-muted mt-2 mb-0 small">Ordinary income tax rates apply.</p>
              </div>
              <div class="icon-circle">📉</div>
            </div>
          </div>
        </div>
        <div class="col-md-6" in:scale={{ delay: 400, start: 0.95 }}>
          <div class="card result-card long-term shadow-lg h-100 border-0 p-4 text-white">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <span class="badge badge-glass mb-2">Long Term</span>
                <h2 class="display-6 fw-bold mb-0">${results.longTermTotal}</h2>
                <p class="mt-2 mb-0 small opacity-75">Reduced tax rates (held > 1 year).</p>
              </div>
              <div class="icon-circle glass">📈</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm p-0 overflow-hidden mb-5">
        <div class="table-responsive">
          <table class="table table-hover results-table mb-0">
            <thead>
              <tr>
                <th>Buy Date</th><th>Sell Date</th><th>Quantity</th><th>Gain/Loss (USD)</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {#each results.matches as match, i}
                <tr in:fly={{ x: -20, delay: 600 + (i * 50) }}>
                  <td>{match.buyDate}</td>
                  <td>{match.sellDate}</td>
                  <td class="fw-semibold">{match.quantity}</td>
                  <td class={parseFloat(match.gain) >= 0 ? 'text-success fw-bold' : 'text-danger fw-bold'}>
                    ${match.gain}
                  </td>
                  <td><span class="badge rounded-pill {match.period === 'Short-term' ? 'bg-light text-dark border' : 'bg-sapphire-light'}">{match.period}</span></td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  {/if}

  <hr class="my-5 opacity-25">

  <section id="about" class="info-module mb-5" in:fade>
    <div class="card border-0 shadow-sm p-5 bubbly-section">
      <article class="prose-custom">
        <h2 class="display-5 fw-bold mb-4 sapphire-text">About the Calculator</h2>
        <p class="post-meta mb-4">Published: December 27, 2025</p>
        <div class="content-text">
          <p>The Crypto Capital Gains Calculator is a free, open-source, privacy-first web utility designed to help cryptocurrency holders estimate their capital gains taxes using the widely accepted <strong>First-In-First-Out (FIFO)</strong> cost basis method. Built as a completely client-side static application, it runs entirely in your browser with no data ever leaving your device.</p>
          <p>Developed in line with a detailed SRS, the tool focuses on simplicity and accuracy. It categorizes gains into short-term (held less than one year) and long-term (held one year or more), reflecting the most common tax treatment distinction used globally.</p>
          <p>Unlike commercial tax software, this tool asks for nothing. There is no tracking, no analytics, and no server-side processing. You input your transactions, and all computations happen instantly on your device. It represents a commitment to privacy, transparency, and education in the cryptocurrency space.</p>
          <p class="fst-italic mt-4 text-muted">Thank you for using this tool. We hope it helps demystify crypto capital gains taxation.</p>
        </div>
      </article>
    </div>
  </section>

  <section id="how-to-use" class="info-module mb-5" in:fade>
    <div class="card border-0 shadow-sm p-5 bubbly-section secondary-bg">
      <article class="prose-custom">
        <h2 class="display-5 fw-bold mb-4 sapphire-text">How to Use</h2>
        <p class="post-meta mb-4">Detailed Instruction Guide</p>
        <div class="content-text">
          <div class="step-card mb-4">
            <h5>Step 1: Add Your Transactions</h5>
            <p>For each buy or sell, fill in the Date, Type (Buy/Sell), Quantity, and Price in USD. Use the "+ Add Entry" button to create more rows.</p>
          </div>
          <div class="step-card mb-4">
            <h5>Step 2: Validate and Calculate</h5>
            <p>Once your logs are entered, click "Calculate Gains". The tool sorts your entries chronologically automatically and matches buys to sells via FIFO.</p>
          </div>
          <div class="step-card mb-4">
            <h5>Step 3: Review Breakdown</h5>
            <p>Review the generated table. Positive values are profits, while negative values represent capital losses. Holding periods are calculated precisely in days (365+ days = Long-term).</p>
          </div>
          <div class="tips-box p-4 mt-4 rounded-4 bg-white shadow-sm">
            <h6 class="fw-bold text-primary">Tips for Best Results:</h6>
            <ul class="mb-0">
              <li>Use 4 decimal places for high precision.</li>
              <li>Include all buys before corresponding sells for accurate matching.</li>
              <li>Remember this tool supports one cryptocurrency at a time.</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section id="faq" class="info-module mb-5" in:fade>
    <div class="card border-0 shadow-sm p-5 bubbly-section">
      <article class="prose-custom">
        <h2 class="display-5 fw-bold mb-4 sapphire-text">Frequently Asked Questions</h2>
        <div class="row g-4 mt-2">
          <div class="col-md-6">
            <div class="faq-item">
              <h5 class="fw-bold">What cost basis method is used?</h5>
              <p class="text-muted">Strict FIFO (First-In-First-Out). Sells are matched to the oldest available buy lots first.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="faq-item">
              <h5 class="fw-bold">Is my data secure?</h5>
              <p class="text-muted">Yes. No transaction data or personal info is ever transmitted or stored. It lives only in your browser's memory.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="faq-item">
              <h5 class="fw-bold">Does it handle losses?</h5>
              <p class="text-muted">Yes. Losses appear as negative values and are aggregated into your totals for offset analysis.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="faq-item">
              <h5 class="fw-bold">Is this suitable for official filing?</h5>
              <p class="text-muted">No. This is an educational estimator. Always consult a tax professional for official reporting.</p>
            </div>
          </div>
        </div>
        <p class="italic-note mt-5 text-center text-muted">Visit our blog for in-depth articles on crypto taxation logic.</p>
      </article>
    </div>
  </section>
</div>

<style>
  :root {
    --sapphire: #1D1E33;
    --sapphire-light: #2A2C4A;
    --accent-blue: #4A90E2;
    --bg-soft: #fcfcfd;
  }

  /* General Styles */
  .main-title { color: var(--sapphire); letter-spacing: -1.5px; }
  .sapphire-text { color: var(--sapphire); }
  .post-meta { font-size: 0.9rem; color: #888; border-bottom: 1px solid #eee; padding-bottom: 10px; }

  /* Bubbly Inputs & Buttons */
  .bubbly-input { border-radius: 12px; padding: 10px 15px; border: 2px solid #eee; transition: all 0.3s; }
  .bubbly-input:focus { border-color: var(--accent-blue); box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1); }
  
  .btn { border-radius: 14px; font-weight: 600; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .btn:hover { transform: translateY(-3px); }
  .btn-primary-sapphire { background: var(--sapphire); color: white; border: none; }
  .btn-outline-sapphire { border: 2px solid var(--sapphire); color: var(--sapphire); }
  .btn-remove { background: #fff5f5; color: #ff4d4d; border: none; padding: 5px 12px; border-radius: 10px; }

  /* Sections */
  .bubbly-section { border-radius: 40px; }
  .secondary-bg { background-color: #f8f9ff; }
  .prose-custom p { line-height: 1.8; color: #444; font-size: 1.1rem; margin-bottom: 1.5rem; }
  .content-text { max-width: 900px; }

  /* Result Cards */
  .result-card { border-radius: 25px; transition: all 0.4s ease; }
  .result-card:hover { transform: translateY(-8px); }
  .result-card.long-term { background: linear-gradient(135deg, #1D1E33 0%, #3D4185 100%); }
  
  .icon-circle { width: 50px; height: 50px; background: #f0f2f5; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
  .icon-circle.glass { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(5px); }

  /* Table Styles */
  .results-table thead th { background: #fcfcfd; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; color: #888; padding: 1.2rem; }
  .bg-sapphire-light { background: var(--sapphire); color: white; }

  .accent-line { width: 6px; height: 35px; background: var(--sapphire); border-radius: 10px; }
  .badge-soft-blue { background: #eef4ff; color: var(--accent-blue); font-weight: 700; padding: 6px 12px; }
  .badge-glass { background: rgba(255, 255, 255, 0.2); color: white; }

  .step-card { padding-left: 20px; border-left: 4px solid var(--accent-blue); }
  .faq-item { margin-bottom: 1rem; }
</style>