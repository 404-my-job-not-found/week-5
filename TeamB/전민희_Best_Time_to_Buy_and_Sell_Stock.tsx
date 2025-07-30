function maxProfit(prices: number[]): number {
  let profit = 0;
  let minPrice = prices[0];
  prices.forEach((price) => {
      minPrice = Math.min(minPrice, price);
      profit = Math.max(profit, price - minPrice);
  })
  return profit
};