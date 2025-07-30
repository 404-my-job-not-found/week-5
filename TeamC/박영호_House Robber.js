var rob = function (nums) {
  let cur = 0;
  let prev = 0;
  let temp = 0;

  nums.forEach((num) => {
    temp = cur;
    cur = Math.max(num + prev, cur);
    prev = temp;
  });

  return cur;
};
