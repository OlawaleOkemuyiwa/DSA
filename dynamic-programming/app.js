//Dynamic programming is taking one problem and breaking it down into smaller subproblems and making sure we solve each one at most one time by storing their solution somehow so that we're not constantly resolving the same subproblem

//Memoization method
function fibonacci(n, memo = []) {
  //O(n) time complexity, bad space complexity--> O(m) due to the memo array
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
console.log(fibonacci(13));

//Tabulation method (has better space complexity).
function fibb(n) {
  //O(n) time complexity, also O(m) space complexity but quite more optimal than recursion solution
  if (n === 0) return 0;
  if (n <= 2) return 1;
  const dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fibb(13));

function fib(n) {
  //O(n) time complexity, O(1) space complexity
  if (n === 0) return 0;
  
  let fibOne = 1;
  let fibTwo = 1;
  
  for (let i = 3; i <= n; i++) {
    let temp = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = temp;
  }
  
  return n === 1 ? fibOne : fibTwo;
}
console.log(fib(13));
