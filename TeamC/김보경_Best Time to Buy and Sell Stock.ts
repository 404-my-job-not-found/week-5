function maxProfit(prices: number[]): number {
  // 초기값
  let maxPrice = 0;
  let lowPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowPrice) {
      lowPrice = prices[i];
    } else if (prices[i] - lowPrice > maxPrice) {
      maxPrice = prices[i] - lowPrice;
    }
  }
  return maxPrice;
}
