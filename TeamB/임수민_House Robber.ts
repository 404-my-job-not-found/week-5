// 첫 번재 시도
// 손안대고 코풀라다 실패했습니다
// 문제가 호락호락하지 않군요, 예시만 보고 홀수, 짝수 자리끼리만 더한 값들의 큰 값만 주면 될 줄 알았습니다.
// [2,1,1,2] 처럼 이틀을 건너뛰어도 되게 해야겠군요

// const rob = (nums: number[]): number =>
//   Math.max(
//     nums.filter((_, i) => i % 2).reduce((acc, cur) => acc + cur, 0),
//     nums.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0)
//   );

// 두 번째 시도

function rob(nums: number[]): number {
  return 0;
}

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
