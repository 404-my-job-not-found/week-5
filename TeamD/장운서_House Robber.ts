// function rob(nums: number[]): number {
//   let evenNumber = 0;
//   let oddNumber = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(i%2 === 0){
//       evenNumber += nums[i]
//     }
//     else{
//       oddNumber += nums[i]
//     }
//   }

//   return Math.max(evenNumber, oddNumber)
// };

function rob(nums: number[]): number {
	return nums.reduce(
		([prev2, prev1], num) => {
			console.log([prev2, prev1], num)
			return [prev1, Math.max(prev1, prev2 + num)]
		},
		[0, 0]
	)[1]
	// if(!nums || nums.length === 0) return 0;
	// if(nums.length === 1)return nums[0]

	// let dp = new Array(nums.length);
	// dp[0] = nums[0];
	// dp[1] = Math.max(nums[0], nums[1]);
	// console.log(dp)
	// let result = 0;
	// let numberArray = [];
	// while(nums.length > 0){
	//   let tempArray;
	//   tempArray = nums.splice(0, 2)
	//   console.log(tempArray)
	//   result += Math.max(...tempArray)

	// console.log(tempArray)
	// for(let i = 0; i < tempArray.length; i++){
	//   console.log('i',tempArray[i])
	// }
	// resultArray.push(tempArray)
}

rob([2, 7, 9, 3, 1])
