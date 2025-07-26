/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length;
  let minPrice = prices[0];
  let result = 0;

  for (let i = 1; i < length; i++) {
    const price = prices[i];

    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > result) {
      result = price - minPrice;
    }
  }

  return result;
};
