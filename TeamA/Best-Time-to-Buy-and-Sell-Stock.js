/**
 * @param {number[]} prices
 * @return {number}
 */

// 실패한 풀이 (이중 for문 사용)

// 이득을 최대로 가질 수 있도록 사는날 하루, 파는날 하루를 정해서 이득을 return 해야함
var maxProfit = function (prices) {
    // dp 리스트를 만들기
    const dp = new Array(prices.length + 1).fill(0);
    // 첫째 날 부터 마지막 날 까지 순회 하면서 각 날짜에 사고 그 날 기점으로 뒤에 있는 날 중 가장 비싼 값에서 산 날의 값을 뺀 값을 dp에 저장
    // 음수가 나오면 0 저장
    for (let i = 0; i <= prices.length; i++) {
        for (let j = i + 1; j <= prices.length; j++) {
            let profit;
            if (prices[i] > prices[j]) {
                profit = -1;
            } else {
                profit = prices[j] - prices[i];
            }
            if (dp[i] < profit) {
                dp[i] = profit;
            }
        }
    }
    console.log(dp);
    // dp에서 가장 큰 값을 return
    const res = dp.reduce((max, curr) => curr > max ? curr : max, dp[0]);
    return res;
};

// 정답 풀이

// 1. 배열을 한 번만 순회하기로 함 (어차피 현재 시점에서 제일 최저값인 애가 미래에도 제일 큰 수익을 낼 수 있는데 왜 굳이 큰 수도 전부 돌아가면서 비교를 해야하냐는 생각에서 출발)
// 2. 순회하면서 지금 이 순간까지의 제일 작은 가격을 기억함
// 3. 2. 로부터 가장 크게 얻을 수 있는 이익을 기억함
// 4. 어차피 지금 이 순간까지 만난 최저값이, 지금까지 만들 수 있는 최고 수익을 갱신할 수 있는 유일한 후보임
// ex) 7 3 5 1 6 4
// ex) 10 2 6 1 3
var maxProfit = function (prices) {
    let minPrice = prices[0];  // 처음부터 돌 거니까 처음엔 얘가 제일 작은 값임
    let maxProfitUntilNow = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        if (prices[i] - minPrice > maxProfitUntilNow) maxProfitUntilNow = prices[i] - minPrice;
    }

    return maxProfitUntilNow;
};