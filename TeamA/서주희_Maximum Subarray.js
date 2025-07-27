var maxSubArray = function (nums) {
  const length = nums.length;
  let currentTotal = nums[0];
  let maxTotal = nums[0];

  for (let i = 1; i < length; i++) {
    const num = nums[i];

    currentTotal = Math.max(currentTotal + num, num);
    maxTotal = Math.max(maxTotal, currentTotal);
  }

  return maxTotal;
};
