/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 인접한 집을 털지 않으면 된다
    // i번째 집까지의 최대 금액은
    // i-1번째 집까지의 최대 금액과  // prev1
    // i-2번째 집까지의 최대 금액 + 현재 집을 털었을 때 금액 중에 큰값을 선택 prev2 + nums[i]
    // dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

    // bottom up 방식으로 풀이

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // 초기값 설정
    let prev2 = nums[0];            // i - 2
    let prev1 = Math.max(nums[0], nums[1]); // i - 1

    for(let i = 2; i< nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

// bottom up 접근 방식..

// i번째 집을 털었을 때 최대 금액은 i-1번째까지의 결과에 기반하여 결정
// i번째까지의 최대 금액을 계속 다시 계산하지 않고 저장해서 재활용 가능
// DP 로 풀 수 있다

// 점화식?
// dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

// 초기값 설정
// dp[0] = nums[0] // 집이 하나면, 그 집
// dp[1] = max(nums[0], nums[1]) // 둘 중 더 많은 돈 있는 집만 턴다

// 반복문으로 점화식 적용
// for (let i = 2; i < nums.length; i++) {
//     dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
// }

// 최적화
// 배열 전체가 필요하진 않다
// let prev2 = nums[0]; // dp[i - 2]
// let prev1 = max(nums[0], nums[1]); // dp[i - 1]

// for (let i = 2; i < nums.length; i++) {
//     let current = max(prev1, prev2 + nums[i]); // dp[i]
//     prev2 = prev1;
//     prev1 = current;
// }

// 최좽
// var rob = function(nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length === 1) return nums[0];

//     let prev2 = nums[0];
//     let prev1 = Math.max(nums[0], nums[1]);

//     for (let i = 2; i < nums.length; i++) {
//         const current = Math.max(prev1, prev2 + nums[i]);
//         prev2 = prev1;
//         prev1 = current;
//     }

//     return prev1;
// };

