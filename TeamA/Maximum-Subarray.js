/**
 * @param {number[]} nums
 * @return {number}
 */

// 실패한 풀이 (Brute Force)

var maxSubArray = function (nums) {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        // i = subarray의 시작점
        for (let j = i; j < nums.length; j++) {
            // j를 subarray의 끝점으로 이동시키면서 nums[i] ~ nums[j]의 합을 계산.
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
            // 각 구간의 합을 maxSum과 비교해 최대값을 갱신.
        }
    }

    return maxSum;
};

// 정답 풀이 (Kadane 점화식)
// currentSum=max(nums[i],currentSum+nums[i])
// maxSum=max(maxSum,currentSum)
// currentSum은 "현재 원소를 포함한 최대 subarray 합".
// maxSum은 지금까지 찾은 최대 subarray 합.

var maxSubArray_solution = function (nums) {
    let currentSum = nums[0]; // 첫 원소로 초기화
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 현재 값 단독 vs 이전 합에 이어붙이기 중 큰 값 선택
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // 최대값 갱신
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};