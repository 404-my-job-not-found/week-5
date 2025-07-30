function maxSubArray(nums: number[]): number {
  let tmpAdd = 0;
  let tmpMax = -100001;

  for (let i = 0; i < nums.length; i++) {
    tmpAdd += nums[i];

    if (tmpMax < tmpAdd) {
      tmpMax = tmpAdd;
    }

    if (tmpAdd < 0) {
      tmpAdd = 0;
    }
  }

  return tmpMax;
};