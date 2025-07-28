/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    // n
    // 매번 1~2 스텝, 총 몇가지의 방법이 있는가?
    // 힌트: n번째 단계에 도달하기 위해 이전 단계는 무엇이었을까요? (단계 크기에 대해 생각해 보세요)
    // DP
    // n번째 계단에 도달하는 방법은 n-1번째에서 1계단 올라오는 방법 + n-2번째에서 2계단 올라오는 방법의 합
    // sum(n) = sum(n-1) + sum(n-2)
    // 피보나찌 수열과 같은..?


    // if(n <= 2) return n;
    // else {
    //    return climbStairs(n-1) + climbStairs(n-2);
    // }
    // 시간 초과!
    // 예를 들어 climbStairs(40)을 호출하면, 수십억 번의 중복 호출이 발생해요.
    // 시간 복잡도: O(2^n)

    if (n <= 2) return n;
    if (memo.hasOwnProperty(n)) return memo[n]; // 이전에 계산한 값이 있으면 리턴

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo); // 계산해서 저장
    return memo[n];

    // 메모이제이션 하는 이유
    // climbStairs(5)
    // ├── climbStairs(4)
    // │   ├── climbStairs(3)
    // │   │   ├── climbStairs(2)
    // │   │   └── climbStairs(1)
    // │   └── climbStairs(2) ❗️중복 호출
    // └── climbStairs(3) ❗️중복 호출
};