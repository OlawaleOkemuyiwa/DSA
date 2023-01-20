// function countDown(num) {
//   if (num <= 0) {
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
//   console.log("here");
// }
// countDown(3);

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }
// console.log(sumRange(4));

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));

// function factorial2(num) {
//   if (num < 0) return 0;
//   if (num <= 1) return 1;
//   return num * factorial2(num - 1);
// }
// console.log(factorial2(3));

// function power(base, exponent) {
//   if (exponent == 0) return 1;
//   if (exponent > 0) return base * power(base, exponent - 1);
//   if (exponent < 0) return (1 / base) * power(base, exponent + 1);
// }
// console.log(power(2, 5));

// function collectOddValues(input) {
//   //helper method recursion is a pattern where we have an outer function(not recursive) which calls an inner function which is recursive. This is commonly done when we need to compile an array or a list of data. Without the outer function, everytime the recursive is recalled, the resultant array or compiled data would be lost so we have to declare the array outside the scope of the recursive function i.e inside a outer function and the resultant data is then returned from the outer function after the recursive helper function is done with its chore and the data compiled;
//   let odd = [];

//   (function helper(arr) {
//     if (arr.length === 0) return;

//     if (arr[0] % 2 !== 0) {
//       odd.push(arr[0]);
//     }

//     helper(arr.slice(1));
//   })(input);

//   return odd;
// }
// console.log(collectOddValues([1, 2, 3, 4, 5]));

// function productOfAnArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfAnArray(arr.slice(1));
// }
// console.log(productOfAnArray([2, 3, 4]));

// function fibonacci(n) {
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(3));

// function reverseAString(str) {
//   if (str.length === 1) return str;
//   return str[str.length - 1] + reverseAString(str.slice(0, -1));
// }
// console.log(reverseAString("mewale"));

// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("scootwale"));

// function isPalindrome(str) {
//   if (str.length === 0) return false;
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
//   return false;
// }
// console.log(isPalindrome("madam"));

// function flatten(arr) {
//   if (arr.length <= 1) return arr[0];
//   return arr[0].concat(flatten(arr.slice(1)));
// }
// console.log(flatten(flatten([[[1, 2]], [[3, 4]], [[5, 6]]])));

// function flattenArr(nestedArr) {
//   let flatarr = [];

//   for (let i = 0; i < nestedArr.length; i++) {
//     if (Array.isArray(nestedArr[i])) {
//       flatarr = flatarr.concat(flattenArr(nestedArr[i]));
//     } else {
//       flatarr.push(nestedArr[i]);
//     }
//   }
//   return flatarr;
// }
// console.log(flattenArr([[1, 2, 3], 5, 6, [9, 8], 1]));
