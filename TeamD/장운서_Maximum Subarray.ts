function maxSubArray(nums: number[]): number {
	let currentSum = nums[0]
	let maxSum = nums[0]

	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max(nums[i], currentSum + nums[i])
		maxSum = Math.max(maxSum, currentSum)
	}

	console.log(maxSum)

	return maxSum
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

// Example usage
// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // Output: 6
// maxSubArray([1]); // Output:
// Kadane’s Algorithm
// 두 개의 변수를 선언해
// 현재 합(currentSum)과 최대 합(maxSum)을 초기화합니다.
// 현재 합은 배열의 첫 번째 요소로 시작하고,
// 최대 합도 첫 번째 요소로 시작합니다.
// 배열을 순회하면서 각 요소를 현재 합에 더하거나,
// 현재 요소 자체로 초기화합니다.
