function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  // 0으로 초기화된 dp 배열 생성
  // dp[i]는 i번째 집까지의 최대 금액을 저장
  const dp: number[] = new Array(n).fill(0);
  dp[0] = nums[0]; // 첫 번째 집을 털었을 때의 금액
  dp[1] = Math.max(nums[0], nums[1]); // 첫 번째와 두 번째 집 중 더 큰 금액

  // 2번째 집부터 마지막 집까지 반복
  for (let i = 2; i < n; i++) {
    // 현재 집을 털지 않거나 털 때의 최대 금액 계산
    // 털지 않을 때: dp[i - 1]
    // 털 때: dp[i - 2] + nums[i]
    // 둘 중 큰 값을 선택
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // 마지막 집까지 털었을 때의 최대 금액 반환
  return dp[n - 1];
}
