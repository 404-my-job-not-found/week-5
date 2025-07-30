var climbStairs = function (n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n === 1) {
    memo[n] = 1;
    return 1;
  }
  if (n === 2) {
    memo[n] = 2;
    return 2;
  }
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};
