/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  // dp[i] = i 번째 계단에 도달하는 방법의 수
  // dp[1] = 1, dp[2] = 2
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  // 3 번째 계단 부터 n번째 계단까지 계산
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // 점화식 적용
  }
  return dp[n];
};
