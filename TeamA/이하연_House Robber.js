/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 인접한 집 같이 털 수 없음 -> 든 집을 단순히 합치기 X
// 최댓값을 누적해가면서, 인접한 집을 피해서 계산
// 마지막 인덱스에서 해야할 일
// 1. 지금 집을 털고, 두 칸 전까지의 최대값과 더한 값이랑
// 2. 지금 집을 안 털고, 직전까지의 최대값을 그대로 가져간 값이랑
// 3. 비교해서 더 큰 걸 dp[i]에 저장할 거임
var rob = function (nums) {
  if (nums.length === 1) return nums[0]; // 집이 하나밖에 없으면 걍 그 집 털 거임
  if (nums.length === 2) return Math.max(nums[0], nums[1]); // 집 2개 잇으면 더 큰 집 털 거임

  let dp = []; // dp[i]: i번째 집까지 털었을 때 얻을 수 있는 최대 금액

  dp[0] = nums[0]; // 집 하나만 잇을 때
  dp[1] = Math.max(nums[0], nums[1]); // 집 2개 잇을 때

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};
