function climbStairs(n: number): number {
  if (n <= 2) return n;

  let first = 1,
    second = 2;

  // 첫 번째와 두 번째 계단을 초기화하고, 세 번째 계단부터 시작합니다.
  // 첫 번째 계단은 1가지 방법, 두 번째 계단은 2가지 방법으로 올라갈 수 있습니다.
  // 이후 각 계단은 이전 두 계단의 방법의 합으로 계산합니다.
  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current; // 현재 계단에 도달하는 방법의 수를 업데이트합니다.
  }

  // 마지막 계단에 도달하는 방법의 수를 반환합니다.
  return second;
}
