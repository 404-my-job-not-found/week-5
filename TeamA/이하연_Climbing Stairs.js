/**
 * @param {number} n
 * @return {number}
 */
// 재귀병 걸려서 처음에는 아ㅋㅋ 재귀로 (남은 계단 개수에서 선택할 수 잇는 선택지의 개수를 카운트하면서 재귀 탈출) 풀어야겟네 ㅇㅈㄹ
// 아니고 그냥 규칙성을 찾으면 해결할 수 잇다... 이라는 생각을 바로 함
// 그래서 n=2, 3, 4일 때의 경우의 수를 정리하니까 뭔가 나왓단 말이지? 그게 2^(n-2) + 1 이었음
// 근데 n이 45까지네? 그럼 2^(n-2)가 생각보다 엄청 클 거 같단 말이야? 그래서 답이 아닐 거 같애 뭔가;
// 그래서 n=5일 때를 해보기로 함 -> 2, 3, 5, 8 -> 피보나치
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  // if(n>=3)
  let num1 = 1;
  let num2 = 2;
  let sum;

  for (let i = 3; i <= n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }

  return sum;
};
