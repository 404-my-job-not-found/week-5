var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    result = Math.max(result, prices[i] - min);
  }

  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
