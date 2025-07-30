function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  let minPrice = prices[0]; // 초기 최소 가격
  let maxProfit = 0; // 초기 최대 이익

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // 현재 가격이 최소 가격보다 작으면 업데이트
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice); // 현재 가격에서 최소 가격을 뺀 값이 최대 이익보다 크면 업데이트
    }
  }

  return maxProfit; // 최대 이익 반환
}
