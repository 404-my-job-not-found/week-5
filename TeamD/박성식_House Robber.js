var rob = function (nums) {
  for (let i = 2; i < nums.length; i++) {
    if (i >= 3 && nums[i - 3] > nums[i - 2]) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 3]);
    } else {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 2]);
    }
  }

  return Math.max(...nums);
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([4, 1, 2, 7, 5, 3, 1])); // 14
