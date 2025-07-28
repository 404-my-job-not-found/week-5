/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 현재 날짜 가격 기준 이후에 가격 차이 가장 큰거? 
    
    // 7 -> 1,5,3,6,4 큰 값이 없네
    // 1 -> 5(4), 3(2), 6(5), 4(3) 중에서 가장 큰 차이값인 5를 리턴 
    // 5 -> 3,6,4 중에 6(1) 값은 이전 차이값인 5보다 작으므로 패쓰
    // ...  

    // let max = 0;

    // for(let i=0; i<prices.length; i++) {
    //     for(let j = i + 1; j < prices.length; j++) {
    //         const profit = prices[j] - prices[i];
    //         if (profit > max) {
    //             max = profit;
    //         }
    //     }
    // }
    // return max;

    // 위와 같이 풀면 시간 초과! o(n2) , 완전 탐색


    // 최소값을 갱신 o(n)
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]; // 최소값 갱신
        } else {
            // 현재 가격에서 가장 저렴했던 날을 뺀 이익
            const profit = prices[i] - min;
            if (profit > max) {
                max = profit; // 최대 이익 갱신
            }
        }
    }

    return max;
};