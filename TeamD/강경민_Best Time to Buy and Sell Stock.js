/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    minPrice = prices[0];
    maxPrice = 0;
    
    for(let i=0; i<prices.length; i++){
        if(minPrice > prices[i]){
            minPrice = prices[i];
        } else {
            const profit = prices[i] - minPrice;
            maxPrice = Math.max(maxPrice, profit);
        }
    }
    
    return maxPrice
};