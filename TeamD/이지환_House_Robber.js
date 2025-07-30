/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = new Array(nums.length);

    // 초기값 설정
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // 세 번째 집부터 계산
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[nums.length - 1];
};

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
