/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 어떻게 하면 o(n)이 된담..?
    // 배열 경우의 수를 만들고, set or map?
    // 아웃풋 값을 두고 비교
    // -2 ~ 4 로 시작, 뒤에서 하나씩 빼가면서 ..? 
    // 1 로 시작..?

    // 위와 같이 풀면 0(n2)
    // 한번의 순회에서 해결을 해야해..
    // 어디서! 시작할지를 정하는게 포인트!!
    // 이전 배열들의 합과 현재의 값의 합과 현재의 값을 비교해서 큰 값을 타겟
    // sum vs current;

    let target = nums[0];
    let sum = nums[0];

    for(let i=1; i<nums.length; i++) {
        // console.log(nums[i], target, sum, "nums[i], target, sum");
        target = Math.max(nums[i], nums[i] + target);
        sum = Math.max(sum, target);
    }

    return sum;
};