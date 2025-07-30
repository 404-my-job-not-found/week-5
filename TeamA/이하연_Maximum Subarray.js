/**
 * @param {number[]} nums
 * @return {number}
 */
// Window의 크기를 키워나가면서 합? -> 너무 많은 합을 구해야 함 ... 중복도 많아져서 비효율적
// "부분"의 느낌이기 때문에 dp배열 사용하면 될듯
// 사실 부분 배열의 최대 합 문제는 가장 유명한 DP 문제 중 하나ㅎㅎㅋ
var maxSubArray = function (nums) {
  let dp = new Array(nums.length); // dp[i]: i 인덱스를 끝으로 하는 Sub 배열의 가장 큰 값
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      // dp[0]은 계산할 필요없이 무조건 nums[0]값
      dp[0] = nums[0];
    } else {
      dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    }

    if (max < dp[i]) max = dp[i]; // dp[i] 값들 중 제일 큰 값을 골라내기 위해 ...
  }

  return max;
};

// 카데인 알고리즘
// http://sustainable-dev.tistory.com/23

// 1. dp[i - 1] + nums[i]: 지금까지 더해온 값 + 현재 값
// 2. Math.max(nums[i], ...): 현재 값이 제일 클 수도 있음 (ex. 지금까지 더해온 값이 음수일 때)
// 3. 현재 값이 음수일 땐 어떻게 처리하나요? -> 고려 안해도 됨. 어차피 dp[i] 정의 자체가 나까지 더했을 때의 값'
// 따라서 dp[i] 중 제일 큰 값 고르면 됨
