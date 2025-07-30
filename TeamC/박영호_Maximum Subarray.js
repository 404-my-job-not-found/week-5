var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let endSum = 0;

  for (const num of nums) {
    endSum = Math.max(endSum + num, num);
    max = Math.max(endSum, max);
  }

  return max;
};
