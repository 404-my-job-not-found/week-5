/**
 * @param {number[]} prices
 * @return {number}
 */
// 문제: 하나를 사서 계속 갖고 있다가 팔게 될 때 이익이 가장 극대화 되었을 때의 수익을 구해라
// 걍 이중 for 문 돌리면 100% 시간초과
// 1. 배열을 한 번만 순회하기로 함 (어차피 현재 시점에서 제일 최저값인 애가 미래에도 제일 큰 수익을 낼 수 있는데 왜 굳이 큰 수도 전부 돌아가면서 비교를 해야하냐는 생각에서 출발)
// 2. 순회하면서 지금 이 순간까지의 제일 작은 가격을 기억함
// 3. 2. 로부터 가장 크게 얻을 수 있는 이익을 기억함
// 4. 어차피 지금 이 순간까지 만난 최저값이, 지금까지 만들 수 있는 최고 수익을 갱신할 수 있는 유일한 후보임
// ex) 7 3 5 1 6 4
// ex) 10 2 6 1 3
var maxProfit = function (prices) {
  let minPrice = prices[0]; // 처음부터 돌 거니까 처음엔 얘가 제일 작은 값임
  let maxProfitUntilNow = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    if (prices[i] - minPrice > maxProfitUntilNow)
      maxProfitUntilNow = prices[i] - minPrice;
  }

  return maxProfitUntilNow;
};

// GPT) 이게 왜 DP인지 알아내는 법
// 문제를 푸는 데 중복된 계산이 발생하진 않나? -> 최저값은 따로 있는데 왜 굳이 5-7을 하고 있어야 함?
// 어떤 값을 구하기 위해 이전 결과(최적값)를 기반으로 쌓아가나? -> maxProfitUntilNow를 계속 비교해감
// 현재 상태가 이전 상태의 최적값에 의해 결정되나? -> 현재 이익이 "언제 샀느냐"에 따라 결정되는데, 이건 이전 상태의 최적값이 뭔지 알아야 가능하죠. 상태 전이 관계가 존재
// brute-force가 O(n²)이지만 뭔가 더 빠르게 풀 수 있을 것 같지 않나? -> 이걸 눈치채는 순간, 이 문제에는 불필요한 중복이 있음을 인지하게 되고, 바로 효율적인 풀이(→ DP적 접근)가 떠오름
// "내가 지금까지 만난 가장 싼 값"만 기억하면 충분하다"
