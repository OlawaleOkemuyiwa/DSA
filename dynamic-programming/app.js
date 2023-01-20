//Dynamic programming is taking one problem and breaking it down into smaller subproblems and making sure we solve each one at most one time by storing their solution somehow so that we're not constantly resolving the same subproblem

//Memoization method
function fibonacci(n, memo = []) {
  //O(n), bad space complexity--> O(m) due to the memo array
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (memo[n] !== undefined) return memo[n];
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  return result;
}
console.log(fibonacci(13));

//Tabulation method (has better space complexity).
function fib(n) {
  //O(n), good space complexity --> O(m) also but better sha
  if (n === 0) return 0;
  if (n <= 2) return 1;
  const dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fib(13));
