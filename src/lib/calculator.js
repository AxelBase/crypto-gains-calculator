export function calculateGains(transactions) {
  // Sort transactions by date ascending
  transactions.sort((a, b) => a.date - b.date);

  const buys = []; // Queue for buy lots (FIFO)
  const matches = []; // Detailed matches for display
  let shortTermTotal = 0;
  let longTermTotal = 0;

  for (const trans of transactions) {
    if (trans.type === 'buy') {
      buys.push({ date: trans.date, quantity: trans.quantity, price: trans.price });
    } else if (trans.type === 'sell') {
      let remainingSellQty = trans.quantity;

      while (remainingSellQty > 0 && buys.length > 0) {
        const buy = buys[0];
        const matchedQty = Math.min(remainingSellQty, buy.quantity);

        // Calculate holding period in days
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const holdingDays = Math.floor((trans.date - buy.date) / millisecondsPerDay);

        // Calculate gain/loss
        const gain = (trans.price - buy.price) * matchedQty;

        // Categorize
        const period = holdingDays < 365 ? 'short-term' : 'long-term';
        if (period === 'short-term') {
          shortTermTotal += gain;
        } else {
          longTermTotal += gain;
        }

        // Record match
        matches.push({
          buyDate: buy.date.toISOString().split('T')[0],
          sellDate: trans.date.toISOString().split('T')[0],
          quantity: matchedQty,
          gain: gain.toFixed(2),
          period
        });

        // Update quantities
        remainingSellQty -= matchedQty;
        buy.quantity -= matchedQty;

        // Remove depleted buy
        if (buy.quantity <= 0) {
          buys.shift();
        }
      }

      // If sells remain unmatched (no buys left), ignore or handle as error; for simplicity, assume valid inputs
    }
  }

  return {
    matches,
    shortTermTotal: shortTermTotal.toFixed(2),
    longTermTotal: longTermTotal.toFixed(2)
  };
}