/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        console.log("currentSum: ", currentSum);

        maxSum = Math.max(maxSum, currentSum);
        console.log("maxSum: ", maxSum);
    }
    return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(Math.max(-2, 1));
