/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n){
    if (n <= 2){
        return n;
    }

    let before1 = 2;
    let before2 = 1;

    for (let i = 3; i <= n; i++){
        const current = before1 + before2;
        before2 = before1;
        before1 = current;
    }

    return before1;
}
