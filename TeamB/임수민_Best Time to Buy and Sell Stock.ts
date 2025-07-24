// 문제 번역
//주어진 주식의 i번째 날 가격을 나타내는 prices 배열이 주어졌습니다.
// 특정 주식을 매수할 날을 선택하고, 그 주식을 매도할 날을 미래의 다른 날로 지정하여 수익을 극대화하려고 합니다.
// 이 거래에서 얻을 수 있는 최대 수익을 반환하세요. 수익을 얻을 수 없는 경우 0을 반환하세요.

// 첫 번째 시도

// const maxProfit = (prices: number[]): number =>
//   prices.reduce((acc, cur, idx) => acc + (cur - prices[idx - 1] > 0 ? cur - prices[idx - 1] : 0), 0);

// 예전에 풀었던 문제긴 한데 reduce로 풀었던 기억이 있어 마찬가지로 reduce로 풀어보려고 합니다.
// `acc`: 누적 이익
// `cur`: 현재 가격
// `idx`: 현재 인덱스

// `cur - prices[idx - 1]: 오늘 가격 - 어제 가격 이고 이게 상승장(양수)일 경우엔 acc(누적 이익)에 더해주고 아니면 0을 더해주는 방식입니다.

// 같은 문제가 아니더군요..
// 원하는 결과는 최대 누적 이익이 아니라 최대 이익을 반환해야 하는 것이기 때문에 `reduce`를 사용해서는 풀 수 없군요..

// 두 번째 시도
// 최대 이익을 반환해야 하기 때문에 결국은 Math.max를 활용해서 사용해야 할 것 같습니다...
// 그래서 모든 경우의 수를 다 계산해서 최대 이익을 반환하는 방식으로 풀었습니다.
// 하지만 이렇게 풀면 시간 복잡도가 O(n^2)이 되어서 Maximum call stack size exceeded 에러가 발생합니다.

// const maxProfit = (prices: number[]): number => {
//   const result: number[] = [];
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       result.push(prices[j] - prices[i]);
//     }
//   }
//   return Math.max(0, ...result);
// };

// 세 번째 시도
// 이중 반복문을 사용하지 않고, 한번만 돌려서 사용해야 될 것 같습니다.
// 한번만 돌아야 하기 때문에 최저가를 찾아서 그 이후의 가격과 차이를 계산하고 최대 이익을 반환하는 방식으로 시도했습니다.
// 순회하면서 최저가를 찾는 것이기 때문에 0번째 인덱스로 초기화 해주고 1번째 인덱스부터 반복문을 돌린 후에
// `min = Math.min(min, prices[i]);` 최저가를 찾아내고, `maxProfit = Math.max(maxProfit, prices[i] - minPrice);` 최대 이익을 찾아내어 반환하게 풀었습니다.
// 요약하자면 각 가격마다 이익 계산하고 최대값 업데이트, 최저가 갱신하면서 최대 이익을 찾아내는 방식입니다.

const maxProfit = (prices: number[]): number => {
  let answer: number = 0;
  let min: number = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    answer = Math.max(answer, prices[i] - min);
  }
  return answer;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));

// const aa = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

// console.log(maxProfit(aa));
