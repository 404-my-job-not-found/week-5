function maxProfit(prices: number[]): number {
	// let minPrice = 0;
	let minPrice = Infinity // Initialize minPrice to a very high value
	let maxProfit = 0
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < prices[minPrice]) {
			minPrice = i // Update minPrice index
		} else {
			maxProfit = Math.max(maxProfit, prices[i] - prices[minPrice])
		}
	}

	return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // Output: 5
