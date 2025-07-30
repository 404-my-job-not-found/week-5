function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxPrice = 0;

  for (let i = 1; i < prices.length; i++) {
    maxPrice = Math.max(maxPrice, prices[i] - minPrice);
    minPrice = Math.min(prices[i], minPrice);
  }

  return maxPrice;
}
