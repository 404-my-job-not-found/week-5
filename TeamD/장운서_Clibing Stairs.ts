function climbStairs(n: number): number {
	if (n <= 2) return n

	let oneStepBefore = 2
	let twoStepBefore = 1
	let allWays = 0

	for (let i = 3; i <= n; i++) {
		allWays = oneStepBefore + twoStepBefore
		twoStepBefore = oneStepBefore
		oneStepBefore = allWays
	}

	return allWays
}

// Example usage:
console.log(climbStairs(5)) // Output: 8
console.log(climbStairs(10)) // Output: 89
console.log(climbStairs(20)) // Output: 10946

// 이 문제는 주어진 계단의 수에 따라 오르는 방법의 수를 계산하는 함수입니다.
// n이 1 또는 2일 때는 각각 1, 2가지 방법
// 이외의 경우에는 이전 두 단계의 방법 수를 합산하여 계산합니다.
// 시간 복잡도는 O(n)이며, 공간 복잡도는 O(1)입니다.
