/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [0];
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    dp[i] = prices[i] - min;
  }

  return Math.max(...dp);
};
