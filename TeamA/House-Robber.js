/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // prev1: 현재 인덱스의 바로 이전 집까지 고려했을 때의 최대 금액(dp[i-1])
    // prev2: 두 칸 전 집까지 고려했을 때의 최대 금액(dp[i-2])
    // 두 번째 집까지의 최대 금액은 첫 번째 집과 두 번째 집 중 큰 값으로 초기화
    let prev1 = Math.max(nums[0], nums[1]); // dp[1]
    let prev2 = nums[0];                    // dp[0]

    // i번째 집부터 끝까지 반복
    for (let i = 2; i < nums.length; i++) {
        // 현재 집을 털 경우: nums[i] + prev2
        // 현재 집을 안 털 경우: prev1
        // 두 값 중 더 큰 값을 선택해 현재 최대 금액을 갱신
        const current = Math.max(prev1, nums[i] + prev2);

        // 다음 집을 계산하기 위해 prev2(두 칸 전)와 prev1(한 칸 전)을 업데이트
        prev2 = prev1;
        prev1 = current;
    }

    // 마지막 집까지 고려했을 때의 최대 금액이 prev1에 저장되어 있다.
    return prev1;
};