// 첫 번재 시도
// 손안대고 코풀라다 실패했습니다
// 문제가 호락호락하지 않군요, 예시만 보고 홀수, 짝수 자리끼리만 더한 값들의 큰 값만 주면 될 줄 알았습니다.
// [2,1,1,2] = 2 + 2 = 4 처럼 이틀을 유동적으로 건너뛰어야 되게 해야겠군요

// const rob = (nums: number[]): number =>
//   Math.max(
//     nums.filter((_, i) => i % 2).reduce((acc, cur) => acc + cur, 0),
//     nums.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0)
//   );

// 두 번째 시도

function rob(nums: number[]): number {
  const answer: number[] = Array(nums.length).fill(0);

  answer[0] = nums[0];
  answer[1] = Math.max(nums[0], nums[1]);

  if (nums.length === 1) return answer[0];
  if (nums.length === 2) return answer[1];

  for (let i = 2; i < nums.length; i++) {
    answer[i] = Math.max(answer[i - 1], nums[i] + answer[i - 2]);
    console.log(answer);
  }

  return answer.pop()!;
}

// function rob(nums: number[]): number {
//   let [a, b] = [0, 0];

//   for (const n of nums) {
//     const temp = Math.max(n + a, b);
//     a = b;
//     b = temp;
//   }

//   return b;
// }

// console.log(rob([2, 3, 1, 9])); // 12
console.log(rob([2, 3, 1, 9])); // 12
// console.log(rob([2, 7, 9, 3, 1, 6])); // 17
console.log(rob([2, 1, 1, 2])); // 4
