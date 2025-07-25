// 이 문제는 DP를 이해하기 좀 쉬운 문제였습니다.
// 우선 최대 값이기 때문에 Math.max를 활용하여 문제를 해결하려했고, 이전 문제처럼 이중 반복문을 돌려서 이차원 배열로 돌리게 되면 스택 오버 플로우가 날 것 같아 nums만큼만 순회하게 푸려고 했습니다.
// cur이 가장 핵심이 되는 변수인데 이전 값과 현재 값을 더한 값과 현재 값을 비교하여 더 큰 값을 선택하고, 이 값을 계속해서 더해나가면 됩니다.
// 그리고 최대 값을 찾기 위해서는 최대 값을 계속해서 갱신해주어야 합니다.

// 이해하기 쉽게 아래와 같이 예시를 주어서 풀었습니다.
// 초기값: cur = -2, answer = -2

// i=1, nums[i]=1:
//   cur = max(1, -2+1) = max(1, -1) = 1    // 새로 시작이 더 좋음
//   answer = max(-2, 1) = 1

// i=2, nums[i]=-3:
//   cur = max(-3, 1+(-3)) = max(-3, -2) = -2    // 이어가는게 더 좋음
//   answer = max(1, -2) = 1

// i=3, nums[i]=4:
//   cur = max(4, -2+4) = max(4, 2) = 4    // 새로 시작이 더 좋음
//   answer = max(1, 4) = 4

// i=4, nums[i]=-1:
//   cur = max(-1, 4+(-1)) = max(-1, 3) = 3    // 이어가는게 더 좋음
//   answer = max(4, 3) = 4

// i=5, nums[i]=2:
//   cur = max(2, 3+2) = max(2, 5) = 5    // 이어가는게 더 좋음
//   answer = max(4, 5) = 5

// i=6, nums[i]=1:
//   cur = max(1, 5+1) = max(1, 6) = 6    // 이어가는게 더 좋음
//   answer = max(5, 6) = 6

function maxSubArray(nums: number[]): number {
  let cur = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    answer = Math.max(answer, cur);
  }

  return answer;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
