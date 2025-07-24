var climbStairs = function (n) {
  let memo = {};

  const climb = (k) => {
    if (k === 1) return 1;
    if (k === 2) return 2;

    if (!memo[k]) {
      memo[k] = climb(k - 2) + climb(k - 1);
    }

    return memo[k];
  };

  return climb(n);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
