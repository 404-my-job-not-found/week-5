function climbStairs(n: number): number {
  if (n < 2) {
    return 1;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
