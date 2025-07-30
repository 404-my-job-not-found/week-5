function climbStairs(n: number): number {
  if (n == 1) return 1;
  if (n == 2) return 2;

  let prevprev = 1;
  let prev = 1;
  let steps = 2;

  for(let i=2; i<n; i++) {
      steps += prev;
      const newPrev = prevprev + prev;
      prevprev = prev;
      prev = newPrev;
  }

  return steps;
};