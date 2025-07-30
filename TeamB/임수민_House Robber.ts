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
// 각 집에서 얻을 수 있는 최대 금액을 저장할 배열 생성하고, 첫 번째 집은 무조건 그 집의 금액으로 초기화, 두 번째 집은 첫 번째 집과 두 번째 집 중 더 큰 값으로 초기화 헸습니다
// 아래 예시 처럼 현재 집을 털지 않는 경우: answer[i-1]
// 현재 집을 터는 경우: nums[i] + answer[i-2] 이렇게 더해서 누적된 값을 저장하고
// 둘 중 더 큰 값을 선택하여 배열에 저장한 뒤 마지막 값인 answer.pop()! 을 반환하게 작성했습니다

// Step 0: [ 2,  3,  1,  9 ]
//         [ 0,  0,  0,  0 ]

// Step 1: [ 2,  3,  1,  9 ]
//         [ 2,  0,  0,  0 ]  ← 첫 번째 집

// Step 2: [ 2,  3,  1,  9 ]
//         [ 2,  3,  0,  0 ]  ← 두 번째 집까지

// Step 3: [ 2,  3,  1,  9 ]
//         [ 2,  3,  3,  0 ]  ← 세 번째 집까지
//                   ↑
//             max(3, 3) = 3
// 현재 집 안 털기: answer[1] = 3
// 현재 집 털기:   nums[2] + answer[0] = 1 + 2 = 3

// Step 4: [ 2,  3,  1,  9 ]
//         [ 2,  3,  3, 12 ]  ← 네 번째 집까지 (완료)
//                       ↑
//               max(3, 12) = 12

function rob(nums: number[]): number {
  const answer: number[] = Array(nums.length).fill(0);

  answer[0] = nums[0];
  answer[1] = Math.max(nums[0], nums[1]);

  if (nums.length === 1) return answer[0];
  if (nums.length === 2) return answer[1];

  for (let i = 2; i < nums.length; i++) {
    answer[i] = Math.max(answer[i - 1], nums[i] + answer[i - 2]);
  }

  // 마지막 집까지 고려한 최대 금액 반환
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
