/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0){
        return 0;
    }
    
    if (nums.length === 1){
        return nums[0];
    }
    
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < nums.length; i++){
        const current = Math.max(sum2, sum1 + nums[i]);
        sum1 = sum2;
        sum2 = current;
    }

    return sum2;
}