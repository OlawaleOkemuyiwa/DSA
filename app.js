// const reverseString = string => {
//     return string.split('').reverse().join('');
// }

// function checkPalindrome(input) {
//   const re = /[^a-zA-Z0-9]/g; //or  /[\W_]/g  ; this regex matches any character that is not enclosed in the bracket, that is matches anything that isnt A-Z, a-z, and 0-9. Then they are replaced with nothing(that is removed from the string)
//   const string = input.replace(re, "").toLowerCase(); //remove all spaces, punctuations and symbols then convert the resulting string to lowercase
//   return string === string.split("").reverse().join("");
// }

// const testCases = [
//   "race car",
//   "not a palindrome",
//   "nope",
//   "never odd or even",
//   "ojo",
// ];

// const howManyPalindrome = (tests, checkFunc) => {
//   const check = [];
//   tests.forEach(el => {
//     check.push(checkFunc(el));
//   });
//   return check.filter(el => el === true).length;
// };
// console.log(howManyPalindrome(testCases, checkPalindrome));

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// let t1 = performance.now();  //time of running the whole code just before the addUpTo func is executed
// addUpTo(1000000000);
// let t2 = performance.now();  //time of running the whole code immediately after the function execution is done
// console.log(`Time elapsed: ${(t2 - t1)/ 1000} seconds...`); //time the func/algo elapsed in seconds

// function charCount(str) {
//     let charCountObj = {};

//     for (let char of str) {
//         if(/[a-z0-9]/.test(char)) {            //  /[a-z0-9]/ or /^[a-zA-Z0-9]+$/ is a regular expression for alphanumeric chars(lowercase a-z or 0-9 cause they are only the needed characters). test(string) is a regEx method that searches for a match between a regEx(a-z0-9) and a specified string. returns true if there is a match and false otherwise(simply to check if a character is alphanumeric or not)
//             char = char.toLowerCase();
//             if (charCountObj[char]) {
//                 charCountObj[char]++
//             } else {
//                 charCountObj[char] = 1;
//             }
//         }
//     }
//     return charCountObj;
// }//instead of using regEx which is slower, we can use a function that tests each char's code to see if the char is a alphanumeric
// console.log(charCount('HELlo Wor3dl hi!!3##%'));

// function isCharAlphanumeric(char) {
//     const charCode = char.charCodeAt(0);
//     if ((charCode > 47 && charCode < 58) ||         //char is numeric(0-9)
//         (charCode > 64 && charCode < 91) ||         //char is upper alpha (A-Z)
//         (charCode > 96 && charCode < 123)) {        //char is lower alpha (a-z)
//         return true ;
//     }
//     return false;
// }

// function getMedian(arr) {
//   const left = 0;
//   const right = arr.length - 1;
//   const mid = Math.floor((left + right) / 2);
//   let median;
//   if (arr.length % 2 === 0) {
//     median = (arr[mid] + arr[mid + 1]) / 2;
//   } else {
//     median = arr[mid];
//   }
//   return median;
// }
// console.log(getMedian([1, 2, 3, 4]));

// function reverseArray (arr) {
//   for (let i = 0; i < Math.floor(arr.length/2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
// console.log(reverseArray([3, 4, 5, 6, 7]));

// function same (arr1, arr2) { //O(n^2) time, O(1) space
//     //if the two arrays have different lengths then they are not equal, return false
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2); //check if arr2 contains a square of the current element of arr1
//         if (correctIndex === -1) { //if no element of array2 is the square of any element of array1 then return false
//             return false;
//         }
//         arr2.splice(correctIndex, 1);  //if the array contains it, remove value from the array so it wont be checked again the next loop
//     }
//     return true;   //if no false is returned all through, then return true
// }
//

/* I. FREQUENCY COUNTER PATTERN */

// function checkElementsIn1SquaredIsElementsIn2(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false
//     }

//     const frequencyCounter1 = {};   //obj that tells us how many times an element occurs in arr1
//     const frequencyCounter2 = {};   //obj that tells us how many times an element occurs in arr2
//     for (const el of arr1) {
//         frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1; //if the element is already in the obj add 1 to it, if not make it 1
//     }
//     for (const el of arr2) {
//         frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
//     }
//     for (const key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {        //check if square of a key in freq1 is in freq2
//             return false;
//         }

//         if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {  //check if the values correspond, that is if there are two 2s in freq1 there should be two 4s in freq2. if not return false
//             return false;
//         }
//     }
//     return true;
// } //frequency counter method is basically to use an object to create a profile (breakdown of the elements of an array or the characters of a string) with key/value pair === the element/char and their count. One can then compare such object to another object profile created from another array or string
// console.log(checkElementsIn1SquaredIsElementsIn2([2,4,2,3,7], [49,16,4,9,4]));

// function checkIfAnagram(string1, string2) {
//   if (string1.length !== string1.length) {
//     return false;
//   }

//   const frequencyCounter1 = {};
//   const frequencyCounter2 = {};

//   for (const char of string1) {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }

//   for (const char of string2) {
//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   }

//   for (const key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkIfAnagram("rat", "car"));

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;

//   const elementsCounter = {};
//   for (const el of arr) {
//     elementsCounter[el] ? elementsCounter[el]++ : (elementsCounter[el] = 1);
//   }

//   return Object.keys(elementsCounter).length;
// }
// console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3]));


/* II. MULTIPLE POINTERS TECHNIQUE (TWO POINTERS)
  When iterating over an array or string, we can set two pointers to search and/or compare two elements. There are three common ways to set the pointers:
  -start both pointers at the beginning of the iteration
  -start both pointers at the end of the iteration
  -start one pointer at the beginning, the other at the end, each moving towards the other in a progression that depends on what to achieve
  */

// function first2ElementsSum0(sortedArr, target) { //find the first 2 elements of a sorted array that sums to a target
//   let left = 0;
//   let right = sortedArr.length - 1;

//   while (left < right) {
//     let sum = sortedArr[left] + sortedArr[right];

//     if (sum < target) {
//       left++;
//     } else if (sum > target) {
//       right--;
//     } else {
//       return [sortedArr[left], sortedArr[right]];
//     }
//   }
// }
// console.log(first2ElementsSum0([-4, -3, -2, -1, 0, 1, 2, 5, 10], 0));

// //Example 2: we wish to square the elements of an ascending sorted array and return an ascending sorted array
// function square1 (arr) {
//   const squared = arr.map(num => num * num);
//   return squared.sort((a, b) => a -b)
// }

// function square2 (arr) {
//   const result = [];
  
//   // create 2 pointers: left keeps track of negatives, right keeps track of positives. If there are no negatives then left becomes redundant
//   let left;
//   let right = 0;

//   //Iterate over the array. moving right forward until we encounter the first +ve element of the array. left is then made the value before that (i.e the last -ve element before the first +ve element)
//   while (right < arr.length && arr[right] < 0) {
//     right++;
//     left = right - 1;
//   }
  
//   //Inside the iteration, compare the squared elements between index left and index right, push/append the smaller element to the resulting array.
//   while (left >= 0 && right < arr.length) { 
//     if ((arr[left] ** 2) < (arr[right] ** 2)) {
//       result.push((arr[left] ** 2));
//       left--;
//     } else {
//       result.push((arr[right] ** 2))
//       right++;
//     }
//   }

//   //After the iteration, our resulting array will have a sorted set of integers. What remains is the element(s) at index left and index right. We can subsequently push/append the remaining elements(s) to the resulting array.
//   while (left >= 0) {
//     result.push((arr[left] ** 2));
//     left--;
//   }

//   while (right < arr.length) {
//     result.push((arr[right] ** 2));
//     right++;
//   }
//   console.log(left, right);
//   return result;
// }
// console.log(square2([-7, -3, 0, 2, 3, 11]));
// console.log(square2([0, 1, 2, 3, 4, 5]));

/* III. SLIDING WINDOW PATTERN 
  We know we're to use this pattern when:
  -We have to deal with the contiguous sequence of elements of a sequentially iterable item e.g an arrays, strings, linked list
  -Typically deals with finding the maximum/minimum of sth, the longest/shortest sequence to satisfy a condition, or if sth is contained within a given string, array etc
  -If we need to calculate sth e.g the running average problem
  -the problem can be of fixed length (e.g max sum of subarray of size k) OR dynamic length.
*/
// BRUTE FORCE APPROACH O(n^2)
// function maxSumSubArray1(arr, n) { //the maximum sum of n consecutive/contiguous elements of an array
//   if (n > arr.length) return;

//   let maxSum = -Infinity; //Not 0 cause incase we only have -ve numbers, the currentSum would be -ve and thus -ve !> 0 i.e the maxSum of that iteration would still be 0. But if we use -ve infinity then -ve > -Infinity i.e the new maxSum would then be -ve sum
//   for (i = 0; i <= arr.length - n; i++) {
//     let currentSum = 0;
//     for (j = i; j < i + n; j++) {
//       currentSum += arr[j];
//     }
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }
// console.log(maxSumSubArray1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// O(n) using sliding window (FIXED WINDOW LENGTH(1 POINTER), here the sliding window is always of length n)
// function maxSumSubArray2(arr, n) { //the maximum sum of n consecutive/contiguous elements of an array
//   if (n > arr.length) return;

//   let currentSum = 0;
//   for (i = 0; i < n; i++) { //find the sum of the first n elements. That would be our starting window
//     currentSum += arr[i];
//   }

//   let maxSum = currentSum; //assuming the sum of the first n elements of the array is the maxSum for the mean time
//   for (i = n; i < arr.length; i++) { 
//     currentSum = currentSum - arr[i - n] + arr[i];
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }
// console.log(maxSumSubArray2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//VARYING WINDOW LENGTH (2 POINTERS), here the sliding window is of dynamic length
// function smallestSubarrayGivenSum(arr, targetSum) { //the least number of contiguous elements of an array that sums up to >= targetSum
//   let minWindowLength = Infinity;   //to be minimized and returned as the result

//   let currentWindowSum = 0;
//   let windowStart = 0;
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     currentWindowSum += arr[windowEnd];

//     while (currentWindowSum >= targetSum) { //while the currentWindowuSum is valid strink the left hand side to see if we could achieve a valid sum with a window of smaller length
//       minWindowLength = Math.min(windowEnd - windowStart + 1, minWindowLength); //the difference in end and start indices of the window is indexed so to get the actual length of the window we add 1. i.e the length of window from el in index 0 to el index 2 is 3
//       currentWindowSum -= arr[windowStart];
//       windowStart++; 

//       if (minWindowLength === 1) return minWindowLength;  //if we ever get a window length of 1 then we're done as that's the least number of contiguous elements possible
//     }
//   }
//   return minWindowLength;
// }
// console.group(smallestSubarrayGivenSum([1, 2, 2, 1, 8, 1, 3, 8], 10));

// VARYING WINDOW LENGTH (2 POINTERS)
// function lengthOfLongestSubstring (s) { //longest distinct substring length of a given string
//   //a set to house a sequence of distinct substring
//   const set = new Set();

//   let maxLength = 0;
//   let start = 0;
//   for (let end = 0; end < s.length; end++) {
//       while (set.has(s.charAt(end))) { 
//         //whenever the char we're on is already in the set then we no longer have
//         //a distinct substring sequence and a new sequence is to be started again
//         set.delete(s.charAt(start)); 
//         start++;
//       }
//       set.add(s.charAt(end));
//       maxLength = Math.max(end - start + 1, maxLength);
//   }
//   return maxLength
// };
// console.log(lengthOfLongestSubstring("pwwkew"));

// function findLength(string, k) { //find the longest substring length with k distinct characters 
//   let maxLength = 0;
//   const map = new Map();

//   let windowStart = 0;
//   for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
//     let rightChar = string.charAt(windowEnd);
//     map.set(rightChar, (map.get(rightChar) || 0) + 1);

//     while (map.size > k) {
//       const leftChar = string.charAt(windowStart);
//       map.set(leftChar, map.get(leftChar) - 1);
//       if (map.get(leftChar) == 0) {
//         map.delete(leftChar);
//       }
//       windowStart++;
//     }
//     maxLength = Math.max(windowEnd - windowStart + 1, maxLength); 
//   }
//   return maxLength;
// }
// console.log(findLength('AAAHHIBC', 2)); //  The distinct characters that make the longest substring are A(3x) and H(2x) == 5


/* IV. DIVIDE AND CONQUER APPROACH --> Example is how merge sort works. When an array to be sorted is provided, 1st thing to do is divide the array down to individual arrays of size 1 || 0 (DIVIDE). An array of 1 el is sorted so we merge these sub arrays accordingly using the 2 pointers technique till we get the overall array sorted (CONQUER)
  IT IS A RECURSIVE METHOD. Other examples are quick sort, binary search, finding max and min, strassem's matrix multiplication 
*/

// function checkIfSumOfElsEqualAVal(arr, val) {
//   const set = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     const searchVal = val - arr[i];
//     if (set.has(searchVal)) {
//       return true;
//     } else {
//       set.add(arr[i]);
//     }
//   }
//   return false;
// };
// console.log(checkIfSumOfElsEqualAVal([4, 2, 5, 1], 9));

// function sumOfElsEqualAVal(arr, val) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const searchVal = val - arr[i];
//     if (map.get(searchVal) !== undefined) {
//       return [map.get(searchVal), i];
//     } else {
//       map.set(arr[i], i);
//     }
//   }
//   return false;
// };
// console.log(sumOfElsEqualAVal([4, 2, 5, 1], 9));

/* V. BACKTRACKING ALGORITHMIC TECHNIQUE --> Backtracking is a general algorithmic technique for finding all (or some) solutions to a computational problem by incrementally building candidates to the solutions and abandoning a candidate ("backtracking") as soon as it determines that the candidate cannot possibly be completed to a valid solution
The technique is particularly useful for problems that cannot be solved by brute force, and require a more sophisticated approach to finding all solutions, such as the traveling salesman problem, N-queens problem, or Sudoku.
The process involves choosing a move and making it, then recursively solving the subproblem that arises as a result of making that move. If the move leads to a solution, it is recorded. If not, the move is undone and another move is tried. The process is repeated until all possible solutions have been found.

There are 3 keys to keep in mind while solving backtracking problems --> Our choice, Our constraints, Our goal (CCG). 
 */

//LEETCODE SOLUTIONS
//L.1 (Easy)
var twoSum = function(nums, target) { //unsorted array time O(n). space O(n)
  //a map that houses already visited elements of nums and their indexes
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    //x is the no to add to the current element of nums to give the target
    if (map.has(x)) {
      return [map.get(x), i];
    } else {
      map.set(nums[i], i);
    } 
  }
};

//L.167 (Medium) II
var twoSumII = function(numbers, target) { // non-decreasing sorted array. time O(n). space(1)
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (target === sum) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};


//L.9 (Easy)
var isPalindrome = function(x) { //time O(log10x. space O(1)
  if (x < 0) return false; 

  let num = x;
  let revNum = 0;
  while (num > 0) {
    revNum = (revNum * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  return x === revNum;
};

//L.13 (Easy)
var romanToInt = function(s) {
  const obj = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

  let int = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s.charAt(i)] < obj[s.charAt(i + 1)]) {
      int += obj[s.charAt(i + 1)] - obj[s.charAt(i)];
      i++;
    } else {
      int += obj[s.charAt(i)]
    }
  }

  return int;
};

//L.14 (Easy)
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) { 
      //if cur prefix is not a valid prefix, its last char is removed then checked again
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return "";
    }  
  }    
  return prefix;
};

//L.20 (Easy)
var isValid = function(s) {
  const obj = {')': '(', '}': '{', ']': '['};
  
  //a stack to contain opening brackets waiting to be closed
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (obj[char]) {
      //if the current char is a closing bracket then the top element of
      //stack must be its equivalent opening bracket waiting to be closed
      if (stack.pop() !== obj[char]) return false; 
    } else {
      //else it is an opening bracket to be added to the stack
      stack.push(char);
    }
  }
  return stack.length === 0;
};

//L.21 (Easy)
var mergeTwoLists = function(list1, list2) { //AEA. time O(n + m). space O(1)
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;

  while(list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  } else if (list2) {
    curr.next = list2;
  }

  return dummyHead.next;
};

//L.26 (Easy)
var removeDuplicates = function(nums) { //time O(n). space O(1)
  //insertIndex helps keep track of where non-duplicate elements are to be inserted in nums
  let insertIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    //loop over the nums arr till we encounter a non-duplicate element 
    //which is then inserted at the current insertIndex 
    if (nums[i] === nums[i - 1]) continue;
    nums[insertIndex] = nums[i];
    insertIndex++;
  }
  return insertIndex;
};

//L.27 (Easy)
var removeElement = function(nums, val) {
  //insertIndex helps keep track of where non-ocurrence of val are to be inserted in nums
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    //starting from the first num, loop over the nums arr till we encounter a 
    //non-ocurrence of val which is then inserted at the current insertIndex
    if (nums[i] === val) continue;
    nums[insertIndex] = nums[i];
    insertIndex++;
  }
  return insertIndex;
};

//L.28 (Easy) III
var strStr = function(haystack, needle) { //first occurence of a substring
  let m = haystack.length;
  let n = needle.length;

  for (let i = 0; i <= m - n; i++) {
    for (let j = 0; j < n; j++) {
      //as j moves over needle, also use j to move i rightwards over haystack 
      if (needle[j] !== haystack[i + j]) break;
      
      //if the last char of needle corresponds to the equivalent char of haystack we've found needle in haystack
      if (j === n - 1) return i;
    }
  }

  return -1;
};

var strStrII = function(haystack, needle) { //last occurence of a substring
  let m = haystack.length;
  let n = needle.length;
  let lastIdx = -1;

  for (let i = 0; i <= m - n; i++) {
    for (let j = 0; j < n; j++) {
      //as j moves over needle, also use j to move i rightwards over haystack 
      if (needle[j] !== haystack[i + j]) break;
      
      //if the last char of needle corresponds to the equivalent char of haystack we've found needle in haystack
      if (j === n - 1) lastIdx = i;
    }
  }
  
  return lastIdx;
};

//L.35 (Easy)
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  //coming out of the loop (nothing was returned) signifies our target wasn't 
  //found. The target would be at index "left" if it were to be inserted in order 
  return left;
};

//L.58 (Easy)
var lengthOfLastWord = function(s) {
  let length = 0;
  let i = s.length - 1;

  //loop over s backwards skipping trailing spaces. i stops on the last letter of the last word
  while(i >= 0 && s.charAt(i) === ' ') {
    i--;
  } 

  //starting from the last letter of the last word, count the word until a space is encountered
  while(i >= 0 && s.charAt(i) !== ' ') { 
    length++;
    i--;
  } 
  
  return length;
};

//L.66 (Easy)
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      //if cur digit is not 9 then just increment by 1 and return the resulting array
      digits[i]++;
      return digits;
    } else {
      //else if 9 then change to 0 (9 + 1 == 10 => 0)
      digits[i] = 0;
    }
  }
  //coming out of the loop (nothing was returned) signifies the first digit of digits arr
  //is 9 (which has been turned to 0). 1 is then unshifted into the arr
  digits.unshift(1);

  return digits;
};

//L.67 (Easy)
var addBinary = function(a, b) {
  let str = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry !== 0) {
    let curSum = carry;
    if (i >= 0) curSum += Number(a.charAt(i));
    if (j >= 0) curSum += Number(b.charAt(j));
    str = (curSum % 2) + str; 
    carry = Math.floor(curSum / 2);
    i--;
    j--;
  }

  return str;
};

//L.69 (Easy)
var mySqrt = function(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x/2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //if we exit the loop without returning mid then the exact sqrt root wasn't found
  //at this point left > right i.e left > Sqrt(x) [left === Math.ceil(actual sqrt of x)]
  //and right < Sqrt(x) [right === Math.floor(actual sqrt of x)] 
  return right;
};

//L.70 (Easy)
var climbStairs = function(n) {
  //0 step, 0 distinct way. 1 step, 1 distinct way. 2 steps, 2 distinct ways
  let oneStep = 1;
  let twoStep = 2;

  for (let i = 3; i <= n; i++) {
    let temp = oneStep + twoStep;
    oneStep = twoStep;
    twoStep = temp;
  }
  
  return n === 1 ? oneStep : twoStep;
};

//L.83 (Easy)
var deleteDuplicates = function(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

//L.88 (Easy)
var merge = function(nums1, m, nums2, n) {
  //i, j are pointers for nums1, nums2 respectively starting at end of the real elements of each array
  let i = m - 1;
  let j = n - 1;
  
  //k is another pointer starting from the end of nums1 arr moving backwards
  //orchestrating the merge of nums1 with nums2 in a non-decreasing order
  for (let k = nums1.length - 1; k >= 0; k--) {
    //when we've looped entirely over nums2 then the merge is completed and we done
    if (j < 0) break;
    
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
};

//L.94 (Easy)
var inorderTraversal = function(root) {
  const visited = [];
  if (!root) return visited;

  const stack = [];
  let curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      //traverse down the left of current node while pushing each  
      //encountered node to the stack until we encounter a null node 
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    visited.push(curr.val);
    curr = curr.right;
  }
  return visited;
};

//L.100 (Easy)
var isSameTree = function(p, q) {
  if (!p && !q) {
    //if both p and q are null then they're same
    return true
  } else if (!p || !q) {
    //else if only either of p or q is null then they're not same
    return false
  } else if (p.val !== q.val) {
    //else if neither is null but their values differ then they're not same
    return false
  };
  //p.val == q.val. The 2 nodes can only be same if their left and right children are same
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//L.101 (Easy)
var isSymmetric = function(root) {
  function isMirror(p, q) {
    if (!p && !q) {
      return true;
    } else if (!p || !q) {
      return false;
    } else if (p.val !== q.val) {
      return false;
    }
    //p.val == q.val. The tree can only be symmetric if the left child of p is the same
    //as the right child of q and right child of p is the same as the left child of q
    return isMirror(p.left, q.right) && isMirror(p.right, q.left); 
  }
  return isMirror(root, root);
};

//L.104 (Easy)
var maxDepth = function(root) { //it is similar to preorderDFSIterativeTraversal
  //a null node tree has a depth of 0
  if (!root) return 0;

  const stack = [[root, 1]]; //[[currentNode, depthOfCurrentNodeSubtree]]
  let maxDepth = 1;
  while(stack.length > 0) {
    const [node, depth] = stack.pop();
    maxDepth = Math.max(depth, maxDepth);
    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }
  return maxDepth;
};

//L.108 (Easy)
var sortedArrayToBST = function(nums) {
  //the way we go about it is: for nums arr, the middle element is gonna be the root 
  //node where the elements before it construct the left part of the tree while the elements 
  //after it construct the right part. We do this recursively for the smaller subarrs
  //to determine their subtrees constructed starting from the call stack of the root node 
  //to the farmost left child then back up to the root node then to farmost right child
  
  function helper(leftIdx, rightIdx) {
    if (leftIdx > rightIdx) return null;
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const root = new TreeNode(nums[midIdx]);
    root.left = helper(leftIdx, midIdx - 1);
    root.right = helper(midIdx + 1, rightIdx);
    return root;
  }
  return helper(0, nums.length - 1);
};

//L.110 (Easy)
var isBalanced = function(root) {
  //helper func call returns an array [isPresentNodeBalanced, maxDepthOfPresentSubTree]

  function helper(node) {
    if (!node) return [true, 0]; //a null node is balanced and has depth of 0
    const leftRes = helper(node.left);
    const rightRes = helper(node.right);
    //for the present node to be balanced its left subtree must be balanced, its
    //right subtree must be balanced and the abs difference between the maxDepth of
    //its left subtree and its right subtree must be <= 1
    const isBalanced = leftRes[0] && rightRes[0] && Math.abs(leftRes[1] - rightRes[1]) <= 1;
    return [isBalanced, 1 + Math.max(leftRes[1], rightRes[1])];
  }

  const [treeIsBalanced, maxDepthOfTree] = helper(root);
  return treeIsBalanced;
};

//L.111 (Easy)
var minDepth = function(root) {
  if (!root) {
    //if the current node is a null node then it has a depth of 0
    return 0;
  } else if (!root.left && !root.right) {
    //if the current node is a leaf node (desired) then it has a depth of 1
    return 1;
  } else if (root.left && !root.right) {
    //if the current node only has a left subtree, then we go down the left subtree
    return 1 + minDepth(root.left);
  } else if (!root.left && root.right) { 
    //if the current node only has a right subtree, then we go down the right subtree
    return 1 + minDepth(root.right);
  }

  //if cur node has no null child then we pick the smaller depth btw the left and right subtree
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

//L.112 (Easy)
var hasPathSum = function(root, targetSum) {
  function helper (node, curSum) {
    //if cur node is a null node then return false as there is no root-to-leaf path
    if (!node) return false;

    //increment curSum with the value of the current node
    curSum += node.val;
    
    //check if current node is a leaf node (desired)
    if (!node.left && !node.right) return curSum === targetSum;

    //else continue the check on both left and right subtree. Whichever reaches the target first
    return helper(node.left, curSum) || helper(node.right, curSum);
  }
  return helper(root, 0);
};

//L.118 (Easy)
var generate = function(numRows) {
  const res = [[1]];

  for (let i = 0; i < numRows - 1; i++) { //i = 0 to create res (numRow 2), i = 1 to create res (numRow 3)
    //add 0 to the front and end of the current row to get temp arr for summing purpose 
    const temp = [0, ...res[i], 0];
    
    const nextRow = [];
    //from temp arr construct the next row of Pascal's triangle to be pushed to res array
    for (let j = 0; j < temp.length - 1; j++) {
      nextRow.push(temp[j] + temp[j + 1])
    }
    res.push(nextRow);
  }
  
  return res;
};

//L.119 (Easy)
var getRow = function(rowIndex) {
  const res = [[1]];

  for (let i = 0; i < rowIndex; i++) { //i = 0 to create res (rowIndx 1), i = 1 to create res (rowIndx 2)
    //add 0 to the front and end of the current row to get temp arr for easier summing
    const temp = [0, ...res[i], 0];
    
    const nextRow = [];
    //from temp arr construct the next row of Pascal's triangle to be pushed to res array
    for (let j = 0; j < temp.length - 1; j++) {
      nextRow.push(temp[j] + temp[j + 1])
    }
    res.push(nextRow);
  }

  return res.pop();
};

//L.121 (Easy)
var maxProfit = function(prices) {
  //make price on day 1 the initial buyprice
  let buyprice = prices[0];

  //maxprofit is 0 at this point cause no profit has been achieved yet 
  let maxprofit = 0

  //loop through the rest of the prices. From the remaining prices, we could either 
  //get a cheaper buyprice or possibly a better sellprice to achieve greater profit
  for (let i = 1; i < prices.length; i++) {
    let dayprice = prices[i];
    if (dayprice <= buyprice) {
      buyprice = dayprice;
    } else {
      maxprofit = Math.max(maxprofit, dayprice - buyprice);
    }
  }     
  return maxprofit
};

//L.125 (Easy)
var isPalindrome = function(s) {
  function isCharAlphanumeric(char) {
    const charCode = char.charCodeAt(0);
    return (charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123);
  }
  
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    //if charAt(i) is not alphanumeric, move i forward till we get to one
    while (i < j && !isCharAlphanumeric(s.charAt(i))) {
      i++
    }
    
    //if charAt(j) is not alphanumeric, move j backwards till we get to one
    while (i < j && !isCharAlphanumeric(s.charAt(j))) {
      j--
    }
    
    //now we should have two alphanumeric chars at both ends
    if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) return false;
  }
  
  //if we don't return false from the loop then it is a palindrome string
  return true;
};

//L.136 (Easy) ??
var singleNumber = function(nums) {
  //A map to store the integers and their corresponding counts
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  //the key of the map with value of 1 is our desired integer
  for (const [num, count] of map.entries()) {
    if (count === 1) return num;
  } 

  //The only way to achieve constant space complexity is BIT MANIPULATION
};

//L.141 (Easy)
var hasCycle = function(head) {
  //Floyd's tortoise & hare: O(n) time, O(1) space
  let slow = head;
  let fast = head;

  //should incase the list doesn't have a cycle in it, we wish to stop the loop when fast
  //points to the last node as lastNode.next.next is null.next (error). 
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    //if the list has a cycle in it, slow and fast will meet at some point in the list
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

//L.144 (Easy)
var preorderTraversal = function(root) {
  const visited = [];
  if (!root) return visited;

  const stack = [root]; 
  while (stack.length > 0) {
    const node = stack.pop();
    visited.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    //we add the left node to the stack after the right node is added so it would be the 1st
    //we would add to the visited arr between the two i.e [node, left, right] PREORDER
  }
  return visited;
};

//L.145 (Easy)
var postorderTraversal = function(root) {
  if (!root) return [];
  const visited = [];

  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    visited.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    //we add the right node to the stack after the left node is added so it would be
    //the 1st we would add to the visited arr between the two i.e [node, right, left]
    //[node, right, left].reverse === [left, right, node] POSTORDER
  }
  return visited.reverse();
};

//L.169 (Easy)
var majorityElement = function(nums) { //
  /*
  const count = new Map();

  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);

    if (count.get(num) > nums.length / 2) return num;
  }
  */
  let candidate;
  let cummCount = 0;

  for (let num of nums) {
    if (cummCount === 0) {
      //if cummulative count is 0, then no candidate is being considered atm
      candidate = num;
    }

    //the cur candidate under consideration either gets its count increased/decreased
    if (num === candidate) {
      cummCount++
    } else {
      cummCount--;
    }
  }

  return candidate;
};

//L.203 (Easy)
var removeElements = function(head, val) { //ABA. time O(n), space O(1)
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;
  curr.next = head;

  while(curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummyHead.next;
};

//L.206 (Easy)
var reverseList = function(head) { //time O(n), space O(1)
  if(!head) return head;

  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

//L.217 (Easy)
var containsDuplicate = function(nums) { //time O(n), space O(n)
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > 1) return true;
  }

  return false;
};

//L.231 (Easy)
var isPowerOfTwo = function(n) { //Time: O(logn). Space: O(1)
  if (n <= 0) return false;

  while (n % 2 === 0) n /= 2;

  return n === 1;
};

//L.242 (Easy)
var isAnagram = function(s, t) { // Time: O(N). Space: O(N)
  if (s.length !== t.length) return false;

  const countI = new Map();
  const countII = new Map();

  for (let i = 0; i < s.length; i++) {
    countI.set(s[i], (countI.get(s[i]) || 0) + 1);
    countII.set(t[i], (countII.get(t[i]) || 0) + 1);
  }
  
  for (let [key, value] of countI.entries()) {
    if (!countII.get(key)) return false;

    if (value !== countII.get(key)) return false;
  }

  return true;
};

//L.252 (Easy)
var canAttendMeetings = function(intervals) {

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; ++i) {

    // If the 2nd meeting starts before the 1st meeting has ended
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  };

  return true;
};

//L.876 (Easy)
var middleNode = function(head) { //GAA. time O(n). space O(1)
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //when fast is null or points to the lastNode, then slow points to the mid (or ceil mid if there are even no of nodes)
  return slow;
};

//L.867 (Medium)
var transpose = function(matrix) { //O(n^2) time, O(n^2) space
  const rows = matrix.length;
  const columns = matrix[0].length;

  //the rows of matrix becomes the columns of transpose and the columns of matrix 
  //becomes the rows of transpose. So a transpose is created from matrix
  const transpose = new Array(columns);
  for (let i = 0; i < transpose.length; i++) {
    transpose[i] = new Array(rows);
  }

  //barebone transpose is filled with values from matrix
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      transpose[c][r] = matrix[r][c];
    }
  }
  return transpose;
};

//L.2 (Medium)
var addTwoNumbers = function(l1, l2) {
  let summedList = new ListNode();
  let curr = summedList;
  let carry = 0;

  while (l1 || l2 || carry !== 0) {
    let curSum = carry;
    if (l1) {
      curSum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      curSum += l2.val;
      l2 = l2.next;
    }
    const digit = curSum % 10; 
    carry = Math.floor(curSum / 10); 
    let node = new ListNode(digit);
    curr.next = node;
    curr = curr.next;
  }
  return summedList.next;
};

//L.3 (Medium) III
var lengthOfLongestSubstring = function(s) { 
  //a set to house a sequence of distinct substring
  const set = new Set();

  let maxLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    while (set.has(s.charAt(end))) { 
      //whenever the char we're on is already in the set then we no longer have
      //a distinct substring sequence and a new sequence is to be started again
      set.delete(s.charAt(start)); 
      start++;
    }
    set.add(s.charAt(end));
    maxLength = Math.max(set.size, maxLength);
  }
  return maxLength;
};

//L.5 (Medium)
var longestPalindrome = function(s) {    
  //resL and resR are the starting and ending indexes of result (longest palindrome substr found)
  let resL = 0, resR = 0;

  //go through every char of s considering each to be the centre of a palindrome substring
  for (let i = 0; i < s.length; i++) {
    //to discover any odd length palindrome substring e.g "aba"
    let l = i, r = i;
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      if ((r - l + 1) > (resR - resL + 1)) {
        resL = l;
        resR = r;
      }
      l--;
      r++;
    }

    //to discover any even length palindrome substring e.g "abba"
    l = i, r = i + 1;
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      if ((r - l + 1) > (resR - resL + 1)) {
        resL = l;
        resR = r;
      }
      l--;
      r++;
    }
  }
  return s.substring(resL, resR + 1);
};

//L.6 (Medium)
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const zigzag = new Array(numRows).fill('');

  //index keeps track of how each '' of zigzag arr is populated with characters of s
  let index = 0; 
  
  //step determines how index oscillates top to bottom, bottom to top over zigzag arr
  let step;

  for (let char of s) {
    zigzag[index] += char;

    if (index === 0) {
      //if index is at the beginning of zigzag arr move index downwards with +ve 1 steps
      step = 1;
    } else if (index === numRows - 1) {
      //if index is at the end of zigzag arr move index upwards with -ve 1 steps
      step = -1;
    }
    
    index += step;
  }
  
  return zigzag.join('');
};

//L.7 (Medium)
var reverse = function(x) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  let revNum = 0;
  while(x) {
    let digit = x % 10;

    //if cur revNum is about to exceed MAX OR addition of cur digit will cause overflow
    if (revNum > parseInt(MAX / 10) || 
      (revNum === parseInt(MAX / 10) && digit > MAX % 10)) return 0;

    //if cur revNum is about to go below MIN OR addition of cur digit will cause overflow
    if (revNum < parseInt(MIN / 10) || 
      (revNum === parseInt(MIN / 10) && digit < MIN % 10)) return 0;

    revNum = (revNum * 10) + digit;
    x = parseInt(x / 10);
  }

  return revNum;
};

//L.8 (Medium) ??
var myAtoi = function(s) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  let i = 0;
  let sign;
  let num = 0;
  while (i < s.length && s.charAt(i) === ' ') {
    i++;
  }
  
  if (s.charAt(i) === '+') {
    sign = 1;
    i++;
  } else if (s.charAt(i) === '-') {
    sign = -1;
    i++;
  } else {
    sign = 1;
  }

  while (i < s.length && !isNaN(parseInt(s.charAt(i)))) {
    let curDigit = parseInt(s.charAt(i));

    //if num is about to exceed MAX OR addition of curDigit will cause overflow
    if ((sign * num) > parseInt(MAX / 10) || 
    ((sign * num) === parseInt(MAX / 10) && (sign * curDigit) > MAX % 10)) return MAX;

    //if num is about to go below MIN OR addition of curDigit will cause overflow
    if ((sign * num) < parseInt(MIN / 10) || 
    ((sign * num) === parseInt(MIN / 10) && (sign * curDigit) < MIN % 10)) return MIN;

    num = (num * 10) + curDigit;
    i++;
  }

  return sign * num;
};

//L.11 (Medium)
var maxArea = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    //min height between 2 height vertices determines the actual height of cur tank
    let minHeight = Math.min(height[left], height[right]);

    //determine the ara of cur tank (length * breath)
    let area = minHeight * (right - left);

    //compare with the running max area
    maxArea = Math.max(area, maxArea);

    //update left or right in a way that will maximize area
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

//L.12 (Medium)
var intToRoman = function(num) {
  const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  const symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  let roman = '';
  for (let i = values.length - 1; i >= 0; i--) {
    let value = values[i];
    let symbol = symbols[i];
    
    let symbolCount = Math.floor(num/value);
    if (symbolCount > 0) {
      roman += symbol.repeat(symbolCount);
      num = num % value;
    }
  }
  return roman;
};

//L.15 (Medium)
var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);

        //still on i in search of a new sum to equal target, shift left rightwards
        left++;

        //keep shifting left rightwards if necessary to find non-duplicate triplets
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
    }
  }
  return res;
};

//L.16 (Medium)
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closetSum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let curSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(curSum - target) < Math.abs(closetSum - target)) closetSum = curSum;
      if (curSum === target) {
        return curSum;
      } else if (curSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closetSum;
};

//L.17 (Medium)
var letterCombinations = function(digits) { //AAB. time O(4^n * n). Space O(n) --> recursion call stack
  const res = []; //backtracking
  if (digits.length === 0) return res;
  
  const lookup = {
    2: 'abc', 
    3: 'def', 
    4: 'ghi', 
    5: 'jkl', 
    6: 'mno', 
    7: 'pqrs', 
    8: 'tuv', 
    9: 'wxyz'
  };

  function helper(i, curStr) { 
    if (i >= digits.length) {
      //every single digit has been mapped to a char, push curStr to res and we're done
      res.push(curStr);
      return;
    } 

    let curDigitLetters = lookup[digits[i]];
    for (let char of curDigitLetters) {
      helper(i + 1, curStr + char);
    }
  }

  helper(0, '');
  return res;
};

//L.18 (Medium)
var fourSum = function(nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    const innerNums = nums.slice(i + 1);
    for (let j = 0; j < innerNums.length; j++) {
      if (j > 0 && innerNums[j] === innerNums[j - 1]) continue;

      let left = j + 1, right = innerNums.length - 1;
      while (left < right) {
        let sum = nums[i] + innerNums[j] + innerNums[left] + innerNums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([nums[i], innerNums[j], innerNums[left], innerNums[right]]);

          //still on j in search of a new sum to equal target, shift left rightwards
          left++;

          //keep shifting left rightwards if necessary to find non-duplicate triplets
          while (left < right && innerNums[left] === innerNums[left - 1]) left++;
        }
      }
    }
  }
  return res;
};

//L.19 (Medium)
var removeNthFromEnd = function(head, n) {
  //to remove nth node from the end of a list, If we have 2 pointers from the head where right
  //leads left by n nodes. When right becomes null then left points to the exact nth node from
  //the end to remove. But the way to remove such node is to update the next pointer of the 
  //node before it. This is why a dummyHead is created in order to offset left by 1 node so  
  //that right can then lead left by n + 1 nodes. So when right becomes null, left points to  
  //the node just before the nth node to be removed. Then it can be removed.
  
  let dummyHead = new ListNode(-1, head);

  let left = dummyHead;
  let right = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }
  
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;

  return dummyHead.next;
};

//L.22 (Medium)
var generateParenthesis = function(n) { //AMA. backtracking
  const res = [];

  function helper(open, close, curStr) {
    //open = the count of opening parantheses in curStr
    //close = the count of closing parantheses in curStr
    if (open === n && close === n) {
      res.push(curStr);
      return;
    }

    //we can only add a "(" to curStr if open < n
    if (open < n) helper(open + 1, close, curStr + '(')

    //we can only add a ")" to curStr if open > close
    if (open > close) helper(open, close + 1, curStr + ')')
  }
  
  helper(0, 0, '');
  return res;
};

//L.24 (Medium)
var swapPairs = function(head) {
  //dummyHead serves as left during the 1st swap to help maintain a valid list after the
  //list is broken up and d 1st pair are swapped. left.next (which is dummyHead.next during  
  //1st swap) then connects to the newly swapped list nodes. left then moves to right while 
  //right moves to nextPair to be swapped. now left.next can again serve to link the current 
  //list to the resulting list after the swap 
  
  let dummyHead = new ListNode(-1, head);

  let left = dummyHead;
  let right = head;

  //we must have at least 2 nodes (right and right.next(2nd)) to swap, if not we done
  while (right && right.next) {
    //save pointers
    let rightII = right.next;
    let nextPair = right.next.next;

    //reverse pair
    rightII.next = right;
    right.next = nextPair;
    left.next = rightII;

    //update pointers
    left = right;
    right = nextPair;
  }

  return dummyHead.next;
};

//L.29 ???

//L.31 (Medium) ???
function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

var nextPermutation = function(nums) {
  let n = nums.length;
  let pivot = n - 1;

  while (pivot >= 1 && nums[pivot] <= nums[pivot - 1]) {
    pivot--;
  }

  //if we dont find the pivot point i.e. pivot got to 0, we skip the swap. Otherwise we  
  //iterate again right to left looking for the best digit to swap with
  if (pivot !== 0) { //valid pivot point was found
    let i = n - 1;
    while (nums[i] <= nums[pivot - 1]) {
      i--;
    }
    swap(nums, pivot - 1, i);
  }

  //after the swap (if there was any), we reverse the sequence from the pivot point 
  //until the end thereby minimizing the value of our number
  let left = pivot;
  let right = n - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
};

//L.33 (Medium)
var search = function(nums, target) { //UBG. time O(logn). space O(1)
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      // the left side of mid is sorted
      if (target >= nums[left] && target < nums[mid]) {
        // target is in the left side
        right = mid - 1;
      } else {
        // target is in the right side
        left = mid + 1;
      }
    } else {
      // the right side of mid is sorted
      if (target > nums[mid] && target <= nums[right]) {
        // target is in the right side
        left = mid + 1;
      } else {
        // target is in the left side
        right = mid - 1;
      }
    }
  }
  return -1;
};

//L.34 (Medium)
function binarySearch(arr, left, right, target, firstIndexSearch) {
  let idx = -1;
  while(left <= right) {
    let mid = Math.floor((left + right)/2);
    if (target === arr[mid]) {
      idx = mid;
      firstIndexSearch ? right = mid - 1 : left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }
  return idx;
}
var searchRange = function(nums, target) {
  let idx1 = binarySearch(nums, 0, nums.length - 1, target, true);
  if (idx1 === -1) return [-1, -1];
  let idx2 = binarySearch(nums, idx1, nums.length - 1, target, false);
  return [idx1, idx2];
};

//L.36 (Medium)
var isValidSudoku = function(board) {
  const N = 9;

  //init an array of sets to store unique chars for each row, column and box of the Sudoku
  const rows = new Array(N);      //9 rows
  const columns = new Array(N);   //9 columns
  const boxes = new Array(N);     //9 boxes
  for (let i = 0; i < N; i++) {
    rows[i] = new Set();
    columns[i] = new Set();
    boxes[i] = new Set();
  }

  //check for an invalid row in the Sudoku
  //check for an invalid column in the Sudoku
  //check for an invalid sub 3x3 box of the grid
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      let char = board[r][c];
      if (char === '.') continue;

      if (rows[r].has(char)) return false;
      rows[r].add(char);

      if (columns[c].has(char)) return false;
      columns[c].add(char);

      let boxIdx = Math.floor(r/3) * 3 + Math.floor(c/3);
      if (boxes[boxIdx].has(char)) return false;
      boxes[boxIdx].add(char);
    }
  }
  return true;
};

//L.38 (Medium)
function say(str) {
  let s = '';
  let c = str.charAt(0);
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === c) {
      count++;
    } else {
      s += count + c;
      c = str.charAt(i);
      count = 1;
    }
  }
  s += count + c;
  return s;
}

var countAndSay = function(n) {
  let s = '1';
  for(let i = 1; i < n; i++){
    s = say(s);
  }
  return s;
};

//L.39 (Medium)
var combinationSum = function(candidates, target) { //AAG
  const combinations = [];
  const curCombination = [];

  function helper(i, curSum) {
    if (curSum === target) {
      combinations.push(curCombination.slice());
      return;
    }

    if (curSum > target || i >= candidates.length) return;

    //decision to include candidates[i] in curCombination
    //a candidate can be used more than once so candidate[i] is still considered next
    curCombination.push(candidates[i]);
    helper(i, curSum + candidates[i]);

    //decision to NOT include candidates[i] in curCombination
    curCombination.pop();
    helper(i + 1, curSum); 
  }

  helper(0, 0);
  return combinations;
};

//L.40 (Medium)
var combinationSum2 = function(candidates, target) { //AAU
  const combinations = [];
  const curCombination = [];

  //candidates are sorted to bring duplicated values together so as to skip the duplicates
  //and enforce each number is used only once in a combination
  candidates.sort((a, b) => a - b);

  function helper (i, curSum) {
    if (curSum === target) {
      combinations.push(curCombination.slice());
      return;
    }

    if (curSum > target || i >= candidates.length) return;

    //decision to include candidates[i] in curCombination
    //a candidate can be used only once in a comb so we move to i + 1 for the next cand
    curCombination.push(candidates[i]);
    helper(i + 1, curSum + candidates[i]); 

    //decision to NOT include candidates[i] in curCombination
    //if candidates[i] is duplicated, the duplicates are skipped also
    curCombination.pop();
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;
    helper(i + 1, curSum);
  };

  helper(0, 0);
  return combinations;
};

//L.216 (Medium)
var combinationSum3 = function(k, n) { //MGA
  const combinations = [];
  const curCombination = [];

  function helper(i, curSum) {
    //when the length of curCombination being constructed === k, then we done.
    //check if running curSum is equal the desired value n and push to result. 
    if (curCombination.length === k) {
      if (curSum === n) combinations.push(curCombination.slice());
      return;
    }

    //when the running curSum exceeds target n, then we're out of bound
    if (curSum > n) return;

    for (let j = i; j < 10; j++) {
      curCombination.push(j);

      helper(j + 1, curSum + j);

      curCombination.pop();
    }
  }

  helper(1, 0);
  return combinations;
};

//L.43 (Medium)
var multiply = function(num1, num2) { //time O(n * m), space O(n + m)
  if (num1 === "0" || num2 === "0") return "0";

  //the max length of res would be num1.length + num2.length
  let res = new Array(num1.length + num2.length).fill(0);

  for (let i = num2.length - 1; i >= 0; i--) {
    let b = num2.charAt(i);
    
    for (let j = num1.length - 1; j >= 0; j--) {
      let a = num1.charAt(j);

      let product = a * b;
      const digit = Math.floor((res[i + j + 1] + product) % 10);
      const carry = Math.floor((res[i + j + 1] + product) / 10);
      res[i + j + 1] = digit;
      res[i + j] += carry;
    }
  } 

  //skip the leading 0 if there is and join res (array of ints) to become a string
  return res[0] === 0 ? res.slice(1).join("") : res.join("");
};

//L.55 (Medium)
var canJump = function(nums) { //Greedy --> O(n) time, O(1) space
  //from the onset the goal is to reach the lastIdx, which becomes our initial goalIdx
  let goalIdx = nums.length - 1;

  //from the idx just before the goalIdx, check if we can take a step (from the max steps 
  //available to take from at the idx, nums[i]) that will atleast get us to the goalIdx.
  for (let i = goalIdx - 1; i >= 0; i--) {
    if (i + nums[i] >= goalIdx) {
      //if we can then d new goalIdx is the cur idx and we check again for the idx b4 it
      goalIdx = i;
    }
  }
  
  //if goalIdx which started at the last index ever gets to 0 the start index (at i == -1) 
  //then the last index can be reached if we had started from such start index
  return goalIdx === 0 ? true : false;
};

//L.45 (Medium)
var jump = function(nums) { //Greedy --> time O(n), space O(1)
  //res is no of jumps it takes (num[i] is the max no of steps that can be taken from idx i)
  let noOfJumps = 0;

  //left and right marks the start and end idxs of the sub array window for BFS
  let left = 0;
  let right = 0;

  //we stop the loop when the right idx falls on the last idx (we've gotten to destination and no jump is required anymore)
  while (right < nums.length - 1) {
    //mininum jumps is actualized by taking the farthest step from each idx
    //determine from what idx in the cur sub window one can take the farthest step
    let farthestIdx = 0;
    for (let i = left; i <= right; i++) {
      farthestIdx = Math.max(farthestIdx, i + nums[i]);
    }

    //left becomes the idx just after the present sub array window and right is updated to
    //the farthest idx achievable from the present window. Both form a new window -> res++
    left = right + 1;
    right = farthestIdx;
    noOfJumps++;
  }

  return noOfJumps;
};

//L.46 (Medium)
var permute = function(nums) { //BAA. time O(n*n!). space O(n) --> recursion stack
  const permutations = [];
  const curPermutation = [];

  function helper() {
    if (curPermutation.length === nums.length) {
      permutations.push(curPermutation.slice())
      return;
    }

    for (let num of nums) {
      if (curPermutation.includes(num)) continue;

      curPermutation.push(num);
      helper();
      curPermutation.pop();
    }
  }

  helper();
  return permutations;
};

//L.47 (Medium)
var permuteUnique = function(nums) { //AMA. 
  const permutations = [];
  const curPermutation = [];
  const counter = new Map();

  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  function helper() {
    if (curPermutation.length === nums.length) {
      permutations.push(curPermutation.slice())
      return;
    }

    for (const num of counter.keys()) {
      if (counter.get(num) <= 0) continue;

      curPermutation.push(num);
      counter.set(num, counter.get(num) - 1);

      helper();

      counter.set(num, counter.get(num) + 1);
      curPermutation.pop();
    }
  }

  helper();
  return permutations;
};

//L.48 (Medium)
var rotate = function(matrix) { // O(n^2) time, O(1) space
  const N = matrix.length; 
  
  //transpose the matrix in-place (by swapping the el of the n x n square matrix)
  for (let r = 0; r < N; r++) {
    for (let c = r; c < N; c++) {
      let temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }

  //reverse the rows of the now transposed matrix
  for (let row of matrix) {
    row.reverse();
  }
  // OR
  // for (let r = 0; r < N;  r++) {
  //     for (let c = 0; c < Math.floor(N/2); c++) {
  //         let temp = matrix[r][c];
  //         matrix[r][c] = matrix[r][N-1-c];
  //         matrix[r][N-1-c] = temp;
  //     }
  // }
};

//L.49 (Medium)
var groupAnagrams = function(strs) { 
  //time O(nklogk) n === length of strs arr, k === max length of a str in strs arr
  //space O(nk)

  //a map of sorted strs to arrays containing anagram words coined from it
  const map = new Map();

  //anagrams are words that when sorted they spell exactly the same i.e. eat, tea, ate -> aet
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return Array.from(map.values());
};

//L.50 (Medium)
var myPow = function(x, n) { //time O(logn), space O(1)
  function helper(X, N) {
    if (X === 0) return 0;
    if (N === 0) return 1;
    //2^4 === 2^2 * 2^2. We only need to determine 2^2 and multiply it by itself to get 2^4
    //2^5 === 2^2 * 2^2 * 2. Determine 2^2, multiply it by itself, then multiply it by 2
    let res = helper(X, Math.floor(N/2));
    res = res * res;
    return N % 2 === 0 ? res : res * x;
  }

  //we work recursively with the abs value of n should in case it is a -ve integer
  let res = helper(x, Math.abs(n));

  //the final output is then dependent on whether n is -ve or not
  return n < 0 ? 1 / res : res;
};

//L.53 (Medium)
var maxSubArray = function(nums) { //DP, Kadane's Algorithm -> O(n) time, O(1) space
  let maxSum = -Infinity;
  let currentSubArrSum = 0;
  for (let num of nums) {
    //a sub array is not worth keeping if its sum is -ve (it will only minimize the next 
    //num added to form a new sub array). Instead, we reset it back to an empty sub array 
    //(make its sum = 0) in order to start a new sub array that might yield maximum sum.
    if (currentSubArrSum < 0) currentSubArrSum = 0;
    currentSubArrSum += num;
    maxSum = Math.max(maxSum, currentSubArrSum);
  }
  return maxSum;
};

//L.54 (Medium)
var spiralOrder = function(matrix) { //O(m*n) time, O(1) space
  let res = [];
  let left = 0, right = matrix[0].length - 1; //column boundaries
  let top = 0, bottom = matrix.length - 1;    //row boundaries

  //we stop the loop when left > right OR top > bottom (either goes out of bound)
  while (left <= right && top <= bottom) {
    //get every i in the top row
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    //we're done with the top row, and we shift top downwards by 1 to form a new matrix top
    top++;

    //get every i in the right column
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    //we're done with the right column, and we shift right leftwards by 1 to form a new 
    //matrix right
    right--;

    //for when we aren't dealing with a square matrix
    if (left > right || top > bottom) break;

    //get every i in the bottom row;
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    //we're done with the bottom row, and we shift bottom upwards by 1 to form a new 
    //matrix bottom
    bottom--;

    //get every i in the left column
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    //we're done with the left column, and we shift left rightwards by 1 to form a new 
    //matrix left
    left++;
  }
  return res;
};

//L.56 (Medium)
var merge = function(intervals) { //O(nlogn) time, O(logn)/O(n) space 
  const res = [];

  //sort the intervals in ascending order based on their start values
  intervals.sort((a, b) => a[0] - b[0]);
  
  //merge overlaps in intervals
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    
    if (i === 0) {
      res.push(interval);
      continue;
    }

    //overlap exists if the start of cur interval <= end of the last interval in res
    if (interval[0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]); 
    } else {
      res.push(interval);
    }
  }
  
  return res; 
};

//L.57(Medium)
var insert = function(intervals, newInterval) { //time O(logn), space O(1)
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    if (newInterval[1] < interval[0]) {
      //if end of newInterval is < the start of cur interval, newIterval is b4 cur iterval
      res.push(newInterval, ...intervals.slice(i));
      return res; 
    } else if (newInterval[0] > interval[1]) {
      //if start of newInterval is > the end of cur interval, newIterval is after cur itv
      res.push(interval); 
    } else {
      //if neither is the case, newInterval overlaps cur interval. determine merged itv 
      newInterval = [
        Math.min(interval[0], newInterval[0]), 
        Math.max(interval[1], newInterval[1])
      ];
    }
  } 

  //if we never return from the loop, newInterval is added to res and it is returned
  res.push(newInterval)
  return res;
};

//L.59 (Medium)
var generateMatrix = function(n) { //time O(n^2), space O(1)
  const res = new Array(n);
  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(n).fill(0);
  }

  let left = 0, right = res[0].length - 1;
  let top = 0, bottom = res.length - 1;
  let num = 1;

  while (left <= right && top <= bottom) { 
    for (let i = left; i <= right; i++) {
      res[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res[i][right] = num++;
    }
    right--;
    
    if (left > right || top > bottom) break;

    for (let i = right; i >= left; i--) {
      res[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      res[i][left] = num++;
    }
    left++;
  }
  return res;
};

//L.61 (Medium)
var rotateRight = function(head, k) { //time O(n), space(1)
  //if the list is a null list then we can make no rotation
  if (!head) return head;

  //determine the length of the list with at least a node (tail). The count is started from 1
  //to account for the tail so as to stop the pointer when it gets to the tail (not on null)
  let length = 1; 
  let tail = head;
  while (tail && tail.next) {
    length++;
    tail = tail.next;
  }

  //determine the actual no of rotations to the right by k places to be done
  k = k % length;
  if (k === 0) return head;

  //move to the pivot node and rotate
  let curr = head;
  for (let i = 0; i < length - 1 - k; i++) {
    curr = curr.next;
  }
  let newHead = curr.next;
  curr.next = null;
  tail.next = head;
  return newHead;
};

//L.62 (Medium)
var uniquePaths = function(m, n) { // time O(m * n), space O(m * n)
  const grid = new Array(m);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(n).fill(1);
  }
  
  //each grid cell rep the no of possible unique paths to reach that cell from starting point
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
    }
  }

  return grid[m - 1][n - 1];
};

//L.63 (Medium)
var uniquePathsWithObstacles = function(obstacleGrid) { // time O(m * n), space O(1)  
  //update each grid cell to become the no of unique paths to each cell of the grid (in-place)
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  //if the robot starts in an obstacle cell then it can't move nowhere. 
  if (obstacleGrid[0][0] === 1) return 0;

  //if the robot starts in a space cell then the no of ways to get to such cell is 1
  obstacleGrid[0][0] = 1;

  //fill the cells of the first row. If cur cell is an obstacle, then there are 0 ways to get
  //there from starting position. If not, the no of ways is that of the cell just before it
  for (let c = 1; c < n; c++) {
    obstacleGrid[0][c] = obstacleGrid[0][c] === 1 ? 0 : obstacleGrid[0][c - 1];
  }

  //fill the cells of the first column. If cur cell is an obstacle, then there are 0 ways to 
  //get there from starting position. If not the no of ways is that of the cell just above it
  for (let r = 1; r < m; r++) {
    obstacleGrid[r][0] = obstacleGrid[r][0] === 1 ? 0 : obstacleGrid[r - 1][0];
  }

  //determine the no of possible unique paths for the remaining cells
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (obstacleGrid[r][c] === 1) {
        obstacleGrid[r][c] = 0;
      } else {
        obstacleGrid[r][c] = obstacleGrid[r - 1][c] + obstacleGrid[r][c - 1];
      }
    }
  }

  return obstacleGrid[m - 1][n - 1];
};

//L.64 (Medium)
var minPathSum = function(grid) { //time O(m * n), space O(1)
  //update each grid cell to become the mininum sum to get to each cell of the grid (in-place)
  const m = grid.length;
  const n = grid[0].length;

  //fill the cells of the first row
  for (let c = 1; c < n; c++) {
    grid[0][c] += grid[0][c - 1];
  }

  //fill the cells of the first column
  for (let r = 1; r < m; r++) {
    grid[r][0] += grid[r - 1][0];
  }

  //fill the remaining cells of the grid
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1])
    }
  }

  return grid[m - 1][n - 1];
};

//L.71 (Medium)
var simplifyPath = function(path) {  //time O(n), space O(n)
  const stack = [];

  for (let dir of path.split('/')) {
    if (dir === '' || dir === '.') {
      //we do nothing to the stack when we encounter '.' or ''
      continue;
    } else if (dir === '..') {
      //we pop off the last dir added to the stack if we encounter '..'
      if (stack.length > 0) stack.pop();
    } else {
      //if both earlier conditions are false then it's a valid directory to be added 
      stack.push(dir);
    }
  }
  
  return '/' + stack.join('/');
};

//L.72 (Medium)
var minDistance = function(word1, word2) {
  //base cases: if word1 and word2 are both empty, then no of operations == 0
  //if word1 has length > 0 and word2 is empty. no of operations == length of word1 
  //if word1 is empty and word2 has length > 0. no of operations == length of word2

  const m = word1.length;
  const n = word2.length;

  //each cell in dp rep the minumum number of operations it will take to convert the substr
  //starting at cur position in word1 to substr at cur position in word2. The substrs are 
  //constructed left to right till we get to the 1st char of both words (substr starting at 
  //0,0 in both words are the words themselves) => res == dp[0][0]
  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  //fill up the last row of dp (base case: word1 is an empty string)
  for (let c = 0; c <= n; c++) {
    dp[m][c] = n - c;
  }
  
  //fill up the last column of dp (base case: word2 is an empty string)
  for (let r = 0; r <= m; r++) {
    dp[r][n] = m - r;
  }

  //iterate backwards over both words (and simultaneously over dp nested array)
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      //if the 2 chars match then no need for any operation. The min op at dp[i][j]
      //is then the res of the substrs formed after them: text1[i + 1] and text2[j + 1]
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
      //else if they're not equal, we have 3 operations to choose from so we choose
      //1 out of the 3 which will make us achieve overall minimum no of operations 
        dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
  }
  // console.log(dp);
  return dp[0][0];
};

//L.73 (Medium)
var setZeroes = function(matrix) { //time O(m * n), spae O(1)
  //The idea is that we can use the 1st cell of every row and column as a flag. This flag 
  //would determine whether a row or column has been set to 0 due to a 0 cell in it.
  
  let firstRowZero = false;
  let firstColumnZero = false;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        //if a cell is 0, set the 1st cells in it's row and column to 0 
        //also check if such 0 cell is in the 1st row or 1st column of the matrix
        matrix[0][c] = 0;
        matrix[r][0] = 0;
        if (r === 0) firstRowZero = true; 
        if (c === 0) firstColumnZero = true; 
      }
    }
  }

  //using the 1st row and column, set each cell (exc 1st row and 1st col cells) to 0 where due
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 1; c < matrix[0].length; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  //if we have a 0 cell in the 1st row, set all 1st row cells to 0
  if (firstRowZero) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[0][c] = 0;
    }
  }

  //if we have a 0 cell in the 1st column, set all 1st column cells to 0
  if (firstColumnZero) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][0] = 0;
    }
  }
};

//L.74 (Medium)
var searchMatrix = function(matrix, target) { // time O(log(m*n)), space O(1)
  //The idea behind this is to binary search while considering the matrix as a 1D sorted arr
  //of length m x n. We could flatten the matrix into such array then binary search but that 
  //would take a space of O(m + n). Instead we use a formula to get the pivot El from the
  //available 2D matrix using the pivot idx of our hypothetical 1D sorted arr
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = (m * n) - 1;
  while (left <= right) {
    const pivotIdx = Math.floor((left + right) / 2);

    const pivotRow = Math.floor(pivotIdx / n);
    const pivotCol = pivotIdx % n;
    const pivotEl = matrix[pivotRow][pivotCol];
    
    if (target === pivotEl) {
      return true;
    } else if (target > pivotEl) {
      left = pivotIdx + 1;
    } else {
      right = pivotIdx - 1;
    }
  }

  return false;
};

//L.75 (Medium)
var sortColors = function(nums) { //time O(n) {1 pass}, space O(1)
  function swap (a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }

  //left safeguards 0 digits, right safeguards 2 digits, i iterates over nums for swapping
  let left = 0, right = nums.length - 1;
  let i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      //cause we're swapping with left (LHS sorted), we're certain the value inserted 
      //into pos i from left is on it's final sort position (so i can move forward)
      swap(left, i);
      left++;
      i++;
    } else if (nums[i] === 2) {
      //cause we're swapping with right (RHS unsorted), we're not certain the value 
      //inserted into pos i from right is on it's final sort position (so i stays)
      swap(i, right);
      right--;
    } else {
      i++;
    }
  }
};

// L.77 (Medium)
var combine = function(n, k) { //AMA.
  const combinations = [];
  const curCombination = [];

  function helper(i) {
    if (curCombination.length === k) {
      combinations.push(curCombination.slice());
      return;
    }

    for (let j = i; j <= n; j++) {
      curCombination.push(j);

      helper(j + 1);

      curCombination.pop();
    }
  }

  helper(1);
  return combinations;
};

//L.78 (Medium)
var subsets = function(nums) { //AAG.
  const subsets = [];
  const curSubset = [];

  function helper(i) {
    if (i >= nums.length) {
      subsets.push(curSubset.slice())
      return;
    }

    //decision to include nums[i] in curSubset
    curSubset.push(nums[i]);
    helper(i + 1);

    //decision to NOT include nums[i] in curSubset
    curSubset.pop();
    helper(i + 1);
  }

  helper(0);
  return subsets;
};

//L.79 (Medium)
var exist = function(board, word) { //TBA.
  //O(N * 3^L), N == board cells, l == word length. space O(L)
  
  const ROWS = board.length;
  const COLS = board[0].length;

  //since we can't revisit a char twice within the same path, we use a set to house
  //the pos in the current path to make sure we don't revisit the same pos twice
  const visited = new Set();

  //r,c rep the cur pos on the board that we at, i rep the cur char within the target word
  function helper(r, c, i) {
    //if i ever successfully get to the end of word. Then the word has been found
    if (i === word.length) return true;

    if (r < 0 || r === ROWS || 
      c < 0 || c === COLS || 
      visited.has(`${r},${c}`) ||
      board[r][c] !== word[i]
    ) return false;

    //we've found word[i] in the board
    visited.add(`${r},${c}`);
    
    let res = helper(r - 1, c, i + 1) || helper(r + 1, c, i + 1) ||
      helper(r, c - 1, i + 1) || helper(r, c + 1, i + 1);

    visited.delete(`${r},${c}`);
    return res;
  }


  //we have to consider every cell in the board as a starting point.
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (helper(r, c, 0)) return true;
    }
  }

  return false;
};

//L.80 (Medium)
var removeDuplicates = function(nums) { //time O(n), space O(1)
  let insertIdx = 0;
  let numCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) { 
      numCount++;
      if (numCount <= 2) {
        nums[insertIdx++] = nums[i];
      } 
    } else {
      numCount = 1;
      nums[insertIdx++] = nums[i];
    }
  }
  return insertIdx;  
};

//L.81 (Medium)
var search = function(nums, target) { // time: at best O(logn), at worst O(n) {when duplicates are present}. space: O(1)
  let left = 0
  let right = nums.length - 1;

  while (left <= right) {
    //skip the duplicate values at each ends of nums array (if there are any)
    while (left < right && nums[left] === nums[left + 1]) left++;
    while (left < right && nums[right] === nums[right - 1]) right--;
    
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return true;
    } else if (nums[left] <= nums[mid]) {
      // left side of mid is sorted
      if  (target >= nums[left] && target < nums[mid]) {
        // target is in the left side
        right = mid - 1;
      } else {
        // target is in the right side
        left = mid + 1
      }
    } else {
      // right side of mid is sorted
      if  (target > nums[mid] && target <= nums[right]) {
        // target is in the right side
        left = mid + 1
      } else {
        // target is in the left side
        right = mid - 1
      }
    } 
  }
  return false;
};

//L.82 (Medium)
var deleteDuplicates = function(head) { //time O(n) {only 1 pass accross the list}, space O(1)
  let dummyHead = new ListNode(-1, head);
  //DH is needed cause the list's head can get deleted if it is a duplicated node

  let left = dummyHead;
  let right = head;

  while (right && right.next) { //there must be at leat two nodes to check for duplicacy
    let isDuplicated = false;
    while (right && right.next && right.val === right.next.val) {
      isDuplicated = true;
      right = right.next;
    }

    if (isDuplicated) {
      left.next = right.next;
    } else {
      left = left.next;
    }
    right = right.next;
  }
  return dummyHead.next;
};

//L.86 (Medium)
var partition = function(head, x) { // time O(n), space O(1) {2 linked lists, each with 1 node}
  let leftHead = new ListNode(-1);
  let left = leftHead;
  let rightHead = new ListNode(-1);
  let right = rightHead;

  while (head) {
    if (head.val < x) {
      left.next = head;
      left = left.next;  
    } else {
      right.next = head;
      right = right.next; 
    }
    head = head.next;
  }
  right.next = null;
  left.next = rightHead.next;
  return leftHead.next;
};

//L.89 (Medium) ???

//L.90 (Medium)
var subsetsWithDup = function(nums) { //ABY. time O(n * 2^n). space O(n)
  const subsets = [];
  const curSubset = [];

  nums.sort((a, b) => a - b);

  function helper(i) {
    if (i >= nums.length) {
      subsets.push(curSubset.slice());
      return;
    }

    //decision to include nums[i] in curSubset
    curSubset.push(nums[i]);
    helper(i + 1);

    //decision to NOT include nums[i] in curSubset
    //if nums[i] is duplicated, the duplicates are skipped also
    curSubset.pop();
    while(i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
    helper(i + 1);
  }

  helper(0);
  return subsets;
};

//L.91 (Medium) ???
var numDecodings = function(s) { // time O(n), space O(n)
  //a map of idxs of ints in s already encountered and the no of ways they were decoded
  const memo = new Map();

  function helper(i) {
    //if cur idx has already been decoded, get the result for such idx
    if (memo.has(i)) return memo.get(i);

    //if char at cur idx is '0', then there are 0 ways to decode that
    if (s.charAt(i) === '0') return 0;

    //if idx makes it to the last char of s {a non '0' char}, we have 1 valid way to decode
    if (i === s.length - 1) return 1;

    //if cur idx is outta bound, we've hit the end and that is also 1 valid way to decode
    if (i === s.length) return 1;

    //one-digit encoding on cur idx
    let res = helper(i + 1);

    //if we have a valid two-digit encoding from cur idx
    if (parseInt(s.substring(i, i + 2)) <= 26) {
      res += helper(i + 2);
    }
    memo.set(i, res);
    return res;
  }

  return helper(0);    
};

//L.92 (Medium)
var reverseBetween = function(head, left, right) { //time O(n), space O(1)
  let dummyHead = new ListNode(-1, head);
  let leftNode = dummyHead;
  let rightNode = head;

  //move both pointers till rightNode is on the starting node of the sublist to be reversed 
  //(left position) and leftNode is on the node just before it
  for (let i = 0; i < left - 1; i++) {
    leftNode = rightNode;
    rightNode = rightNode.next;
  }

  //reverse the sublist
  let prev = null
  for (let i = 0; i <= right - left; i++) {
    let next = rightNode.next;
    rightNode.next = prev;
    prev = rightNode;
    rightNode = next;
  }

  //connect the now reversed sublist to the other nodes of the list
  leftNode.next.next = rightNode;
  leftNode.next = prev;
  return dummyHead.next;   
};

//L.93 (Medium) 
const hasLeadingZero = str => str !== '0' && str[0] === '0';
const ipIsValid = nums => nums.every(num => !hasLeadingZero(num) && parseInt(num) <= 255);

// a valid ip address would have 4 parts separated by dots -> a.b.c.d
// we iterate through `s` to insert 3 dots and separate the string into 4 segments
// for each segment, we check if it is valid
// if all 4 segments are valid, we combine those 4 segments with dots and push to the result
var restoreIpAddresses = function(s) { //time O(1) {fixed range nested loops}, space O(1)
  const res = [];
  
  //i determines the 1st dot's placement - we just need to run it 3 times at most e.g. for 
  //25523..., we can place the first dot at `2.55`, `25.5` or `255.` to get a valid 1st
  //segment of the IP. we place also the 2nd and 3rd dots in a similar way
  for (let i = 1; i < 4; i++) {
    for (let j = i + 1; j < i + 4; j++) {
      for (let k = j + 1; k < j + 4; k++) {
        const ip = [s.slice(0, i), s.slice(i, j), s.slice(j, k), s.slice(k)];
        if (ipIsValid(ip)) res.push(ip.join('.'));
      }
    }
  }
  
  return res;
};

//L.96 (Medium) 
var numTrees = function(n) { //time O(n^2), space O(1) {numTree to keep the intermediate solutions before n}
  //idx 0 to idx n (in arr of length n + 1) rep the no of nodes to form the unique BST's and
  //d val at each idx rep the no of BST formed by the idx (nodes) e.g. 0||1 idx (node) = 1 BST
  const numTree = new Array(n + 1).fill(1);  

  //since the no of BST's for 0 && 1 nodes is known, we can start determining for nodes >= 2
  for (let nodes = 2; nodes < numTree.length; nodes++) {
    //for a given no of nodes n e.g 2. We've to consider when each value from 1 to n 
    //is the root node e.g. n = 2, when 1 is the root node, the no of BST formed by that 
    //tree is no of BST formed by the nodes in the left subtree * the no of BST formed by
    //the nodes in the right subtree. We do this also for when the root node is 2 till when
    //n is root node. Then these BSTs are summed up to get the total BST's formed by n nodes
    let totalNoOfBST = 0;
    for (let root = 1; root < nodes + 1; root++) {
      let leftNoOfNodes = root - 1;
      let rightNoOfNodes = nodes - root;
      totalNoOfBST += numTree[leftNoOfNodes] * numTree[rightNoOfNodes]
    }
    numTree[nodes] = totalNoOfBST;
  }
  return numTree[n];
};

//L.95 (Medium) ???
var generateTrees = function(n) {
  function helper(first, last) {
    if (first > last) return [null];

    const trees = [];
    for (let root = first; root < last + 1; root++) {
      for (let left of helper(first, root - 1)) {
        for (let right of helper(root + 1, last)) {
          let node = new TreeNode(root);
          node.left = left;
          node.right = right;
          trees.push(node);
        }
      }
    }
    return trees;
  }
  return helper(1, n);
};

//L.97 (Medium) ???
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length < s3.length) return false;

  const memo = new Map();
  
  function helper(i1, i2) {
    if (i1 === s1.length && i2 === s2.length) return true;

    if (memo.has(`${i1},${i2}`)) return memo.get(`${i1},${i2}`);

    if (i1 < s1.length && s1[i1] === s3[i1 + i2] && helper(i1 + 1, i2)) return true;

    if (i2 < s2.length && s2[i2] === s3[i1 + i2] && helper(i1, i2 + 1)) return true;

    memo.set(`${i1},${i2}`, false);

    return false;
  }

  return helper(0, 0);
};

//L.98 (Medium) 
var isValidBST = function(root) {//time O(n) {each node visited once}, space O(heightOfTree)

  function helper(node, min, max) {
    //a null node is a valid BST
    if (!node) return true;

    //a node whose val is <= min OR >= max is an invalid BST
    if (node.val <= min || node.val >= max) return false;

    //no node in the left sub tree should have val >= node.val 
    let leftSubTreeIsValid = helper(node.left, min, node.val); 
    //no node in the right sub tree should have val <= node.val 
    let rightSubTreeIsValid = helper(node.right, node.val, max);

    return leftSubTreeIsValid && rightSubTreeIsValid;
  }

  return helper(root, -Infinity, Infinity);
};

//L.99 (Medium) ???

//L.102 (Medium)
var levelOrder = function(root) { //BA. time O(n*k) {k is Q's length }, space O(n) {queue used}
  const visited = [];
  if (!root) return visited;

  const queue = [root];
  let level = 0;
  while(queue.length > 0) {
    //start the current level
    visited.push([]);

    //get the no of nodes to be in the current level from the queue
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      visited[level].push(node.val)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return visited;
};

//L.103 (Medium)
var zigzagLevelOrder = function(root) { //BAM. time O(n*k) {k is Q's length}, space O(n) {Queue}
  const visited = [];
  if (!root) return visited;

  const queue = [root];
  let level = 0;
  while(queue.length > 0) {
    //start the current level
    visited.push([]);

    //get the no of nodes to be in the current level from the queue
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      if (level % 2 === 0) {
        visited[level].push(node.val);
      } else {
        visited[level].unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return visited;
};

//L.105 (Medium)
var buildTree = function(preorder, inorder) { //BAM. time O(n^2), space O(n^2)
  if (preorder.length === 0 || inorder.length === 0) return null;
  let val = preorder.shift();
  let root = new TreeNode(val);
  let index = inorder.indexOf(val);
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
};

//L.106 (Medium)
var buildTree = function(inorder, postorder) { //AG. time O(n^2), space O(n^2)
  if (inorder.length === 0 || postorder.length === 0) return null;
  let val = postorder.pop();
  let root = new TreeNode(val);
  let index = inorder.indexOf(val);
  root.left = buildTree(inorder.slice(0, index), postorder);
  root.right = buildTree(inorder.slice(index + 1), postorder);
  return root;
};

//L.107 (Medium)
var levelOrderBottom = function(root) { //AA. time O(n*k) {k is Q's length }, space O(n) {queue used}
  const visited = [];
  if (!root) return visited;

  const queue = [root];
  let level = 0;
  while(queue.length > 0) {
    //start the current level
    visited.push([]);

    //get the no of nodes to in the current level from the queue
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      visited[level].push(node.val)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return visited.reverse();
};

//L.109 (Medium)
var sortedListToBST = function(head) { //FAM. time O(n), space O(n) {cause of nums arr}
  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }
  
  function helper(leftIdx, rightIdx) {
    if (leftIdx > rightIdx) return null;
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let root = new TreeNode(nums[midIdx]);
    root.left = helper(leftIdx, midIdx - 1);
    root.right = helper(midIdx + 1, rightIdx);
    return root;
  }
  return helper(0, nums.length - 1);
};

//L.113 (Medium)
var pathSum = function(root, targetSum) { //AAD. time O(n^2) [O(n) to visit all nodes, O(n) to copy the el of curPath on a node whose path satisfies the cond], space O(n) --> the curPath arr created
  const paths = [];
  const curPath = [];

  function helper (node, curSum) {
    //if we're dealing with a null tree, then return result paths has []
    if (!node) return;

    //increment curSum with the value of the current node and add cur node to curPath
    curSum += node.val;
    curPath.push(node.val);
    
    //check if current node is a leaf node (desired) and satisfies condition
    if (!node.left && !node.right && curSum === targetSum) {
      paths.push(curPath.slice());
    }

    //continue down both the left and right subtree.
    if (node.left) helper(node.left, curSum);
    if (node.right) helper(node.right, curSum);

    //finally from the curPath arr in memory remove the recently pushed el to it so as 
    //to return it to the state it was in order to correctly push the next node val into it
    curPath.pop(); 
  }

  helper(root, 0);  
  return paths;
};

//L.114 (Medium)
var flatten = function(root) { //AFM. time O(n), space O(n) {stack used}
  if (!root) return root;

  const stack = [root];
  let curr = new TreeNode(-1);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    curr.left = null;
    curr.right= node;
    curr = curr.right;
  }
};

//L.116 (Medium)
var connect = function(root) { //ABA. time O(n), space O(1)
  if (!root) return root;

  //the curr level is used to connect the next pointers of the level below it
  //since it's a perfect BT, we're always certain of how to move to the next level's leftmost
  let currLevelLeftmost = root;
  while (currLevelLeftmost.left) {
    let curr = currLevelLeftmost;

    //iterate across curr level connecting the next pointers of the next level
    while (curr) {
      //establish siblings' connection of level below
      curr.left.next = curr.right;

      //establish cousins' connection of level below (if there are to be any)
      if (curr.next) curr.right.next = curr.next.left;

      //progress curr pointer in the curr level "linked list"
      curr = curr.next;
    }

    //move unto the next level
    currLevelLeftmost = currLevelLeftmost.left;
  }

  return root;
};

//L.117 (Medium)
var connect = function(root) { //BAM. time O(n), space O(1)
  if (!root) return root;

  //the curr level is used to connect the next pointers of the level just below it
  //it's not a perfect BT so we're never certain of how to move to the next level's leftmost (we've to determine for each level)
  let curr = root;
  let nextLevelLeftmost = null;
  let nextLevelRightmost = null;
  while (curr) {
    //iterate across the curr level connecting the next pointers of the level below it 
    while (curr) {
      if (curr.left) {
        if (!nextLevelLeftmost) {
          //if leftmost & rightmost havent been set, set them to the left of curr
          nextLevelLeftmost = curr.left;
          nextLevelRightmost = curr.left;
        } else {
          //if they have, update next pointer of rightmost and move rightmost forward
          nextLevelRightmost.next = curr.left;
          nextLevelRightmost = nextLevelRightmost.next;
        }
      }

      if (curr.right) {
        if (!nextLevelLeftmost) {
          //if leftmost & rightmost havent been set, set them to the right of curr
          nextLevelLeftmost = curr.right;
          nextLevelRightmost = curr.right;
        } else {
          //if they have, update next pointer of rightmost and move rightmost forward
          nextLevelRightmost.next = curr.right;
          nextLevelRightmost = nextLevelRightmost.next;
        }
      }

      //progress curr pointer in the curr level "linked list"
      curr = curr.next;
    }

    //move unto the next level
    curr = nextLevelLeftmost;
    nextLevelLeftmost = null;
    nextLevelRightmost = null;
  }

  return root;
};

//L.199 (Medium)
var rightSideView = function(root) { //BAF. time O(n), space O(n) {queue used}
  const rightSide = [];
  if (!root) return rightSide;

  const queue = [root];
  while (queue.length > 0) {
    //get the no of nodes in the current level from the queue
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      if (i === levelLength - 1) rightSide.push(node.val);      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return rightSide;
};

//L.120 (Medium)
var minimumTotal = function(triangle) { //AA. time O(n^2), space O(n)
  //dp is an arr used to store the minimum sum path values at each position. dp has a length
  //of (triangle.length + 1) because it includes an additional element to handle the 
  //boundaries of the triangle. The initial value of each element in dp is set to 0.
  const dp = new Array(triangle.length + 1).fill(0);

  //starting from the last row determine the min sum path from bottom up while overwriting
  //the dp array with min sums determined at each row till we get to the top
  for (let r = triangle.length - 1; r >= 0; r--) {
    for (let c = 0; c < triangle[r].length; c++) {
      dp[c] = triangle[r][c] + Math.min(dp[c], dp[c + 1]);
    }
  }
  
  return dp[0];
};

//L.122 (Medium)
var maxProfit = function(prices) { //BA. time O(n), space O(1)
  let totalProfit = 0;

  //starting from day 2, compare the price of day i to the price of previous day, i - 1
  for (let i = 1; i < prices.length; i++) {
    let dayprice = prices[i];
    let prevDayprice = prices[i - 1];
    if (dayprice > prevDayprice) {
      totalProfit += (dayprice - prevDayprice);
    }
  }
  //PS: you can also sell a stock in a day (for profit) then buy again that same day to sell later
  return totalProfit;
};

//L.128 (Medium)
var longestConsecutive = function(nums) { //AGA. time O(n) {set.has() is O(1)}, space O(n)
  // nums arr is used to create a SET so as to weed out duplicates in order to satisfy
  // the solution approach. A num that's part of a running sequence has a left neighbour i.e 
  // for a num, if numsSet has (num - 1) then num is part of a running sequence. if not then
  // num is the start (1st value) of a sequence. Now if num is a start, we can check  
  // for the other nums in it's sequence by checking if numsSet has (num + 1)

  const numsSet = new Set(nums);
  let longestSequence = 0;

  for (let num of numsSet) {
    //check if num is the start of a sequence
    if (!numsSet.has(num - 1)) { //if the num b4 it is not in the set then it is a start
      let currentNum = num;
      let sequenceLength = 1;

      while (numsSet.has(currentNum + 1)) {
        currentNum++;
        sequenceLength++;
      }

      //after the current sequence ends, we could have potentially found the longest sequence
      longestSequence = Math.max(longestSequence, sequenceLength);
    }
  }

  return longestSequence;
};

//L.129 (Medium)
var sumNumbers = function(root) { //BFM. time O(n) {all nodes visited}, space 0(treeHeight) 
  let totalSum = 0;

  function helper (node, pathSum) {
    if (!node) return;
    pathSum = (pathSum * 10) + node.val;
    if (!node.left && !node.right) {
      totalSum += pathSum;
      return;
    }
    if (node.left) helper(node.left, pathSum);
    if (node.right) helper(node.right, pathSum);
  }
  helper(root, 0);

  return totalSum;
};

//L.130 (Medium)
var solve = function(board) {//AG. time O(N) {N is board cells}. space O(N) {call stack}
  //the approach here is to mark all unsurrounded 'O's with an indicator then flip the 
  //'O's unmarked (surrounded 'O's) to 'X's while leaving the unsurrounded ones as 'O's
  const rows = board.length, cols = board[0].length;
  
  function mark (r, c) {
    if (r < 0 || r === rows || c < 0 || c === cols || board[r][c] !== 'O') {
      return;
    }
    board[r][c] = 'U';
    mark(r - 1, c);
    mark(r + 1, c);
    mark(r, c - 1);
    mark(r, c + 1);
  }

  //find all unsurrounded 'O's and replace them with an indicator, let's say 'U' (O -> U).
  //unsurrounded 'O's are either on the edge of board or neighbouring 'O's of such edge 'O's
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] == 'O' && (r == 0 || r == rows - 1 || c == 0 || c == cols - 1)) {
        mark(r, c);
      }
    }
  }

  //now surrounded 'O's are captured by 'X' (O -> X) and unsurrounded 'O's 
  //(which are now 'U's in the board) are changed back to 'O' (U -> O)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X';
      } else if (board[r][c] === 'U') {
        board[r][c] = 'O';
      }
    }
  }
};

//L.131 (Medium)
function isPalindrome (s, i, j) {
  while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
  }
  return true;
}

var partition = function(s) { //AAB. time O(n * 2^n). space O(n) --> to store recursion stack
  const partitions = []; //backtracking
  const curPartition = [];

  function helper (i) {
    if (i >= s.length) {
      partitions.push(curPartition.slice());
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        curPartition.push(s.substring(i, j + 1));
        helper(j + 1);
        curPartition.pop();
      }
    }
  }

  helper(0);
  return partitions;
};

//L.133 (Medium)
var cloneGraph = function(node) { //FAA. time O(no of nodes + no of edges). space O(no of nodes)
  if (!node) return node;

  //a map of already visited nodes of the given graph to their copies
  const visited = new Map();

  function clone(node) {
    //if curr node has already been visited, then return it's copy
    if (visited.has(node)) return visited.get(node);

    //if not, create a copy of curr node and map such node to it's newly created copy
    let copy = new Node(node.val);
    visited.set(node, copy);

    //also create a copy of every neighbouring node of the curr node and make such 
    //copies the neighbouring nodes of curr copy
    for (let adjacentNode of node.neighbors) {
      let copyNode = clone(adjacentNode); //returns the copy of curr adjacentNode
      copy.neighbors.push(copyNode);
    }
    
    return copy;
  }

  return clone(node);
};

//L.134 (Medium)
var canCompleteCircuit = function(gas, cost) {//BAM. time O(n), space O(1)
  if (gas.reduce((acc, el) => acc + el) < cost.reduce((acc, el) => acc + el)) {
    //if total amount of gas available to buy < total amount of gas required to move
    return -1;
  }

  let start = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += (gas[i] - cost[i]);

    //if at any station, my tank will go below 0 if i decide to journey to the next station,
    //then the next station becomes my new starting point with a tank of 0.
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return start;
}

//L.137 (Medium) ??
var singleNumber = function(nums) { //GAA. time O(n), space O(n) {O(1) space is by bitwise op}
  const counter = new Map();

  for (let num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }
  
  for (let [key, val] of counter.entries()) {
    if (val === 1) return key;
  } 
};

//L.138 (Medium)
var copyRandomList = function(head) { //AFB. time O(n), space O(n)
  const oldToCopy = new Map();

  //1st pass is to map old nodes to their respective newly created copies
  let curr = head;
  while (curr) {
    let copy = new Node(curr.val, null, null);
    oldToCopy.set(curr, copy);

    curr = curr.next;
  }

  //this is done because when we try to determine the copy of curr.next/random from our map in
  //the 2nd pass, if the value is null, oldToCopy.get(null) would return null instead of undefined
  oldToCopy.set(null, null);

  //2nd pass is to update each copy's next and random pointers in accordance to the old list
  curr = head;
  while (curr) {
    let copy = oldToCopy.get(curr);
    copy.next = oldToCopy.get(curr.next);
    copy.random = oldToCopy.get(curr.random);

    curr = curr.next;
  }

  return oldToCopy.get(head);
};

//L.139 (Medium)
var wordBreak = function(s, wordDict) {//BAA. time O(n^3). space O(n) {n == length of s}
  //dp[i] rep validation of the substr formed from idx i to the right of string s as a valid sequence of substrs of s
  const dp = new Array(s.length + 1).fill(false); 
  dp[dp.length - 1] = true; //base case {substr after the last substr of s ('') is validated}

  for (let i = s.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      //from idx i of s, check if s has enough chars to the right to compare with cur w
      if (i + word.length <= s.length && s.substring(i, i + word.length) === word) {
        //cur substr will only be valid if the substr just after it has been validated
        dp[i] = dp[i + word.length];
      }
      //if the substr from i has already been found in wordDict, no need for further look
      if (dp[i]) break;
    }
  }
  return dp[0];
};

//L.142 (Medium)
var detectCycle = function(head) { //ABM. Floyd's tortoise & hare. time O(n). space O(1)
  let slow = head;
  let fast = head;

  //should incase the list doesn't have a cycle in it, we wish to stop the loop when fast
  //points to the last node as lastNode.next.next is null.next (error). 
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    //if the list has a cycle in it, slow and fast would meet at some point in the list
    if (slow === fast) {
      slow = head;
      //the node where the slow and fast pointers meet is where the cycle begins
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

//L.143 (Medium)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) { //AAM. time O(n). space O(1)
  //find the ceil middle node of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse the 2nd part of the list (slow now points to the head node of the 2nd part)
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //merge the two lists (prev now points to the head node of the 2nd part)
  let l1 = head;
  let l2 = prev;
  while (l1.next && l2.next) {
    let next = l1.next;
    l1.next = l2;
    l1 = next;

    next = l2.next;
    l2.next = l1;
    l2 = next;
  }
};

//L.146 (Medium)
var Node = function(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}
var LRUCache = function(capacity) { //ABA. time O(1), space O(capacity) {hashMap used}
  this.capacity = capacity;
  this.cache = new Map(); //a map of the key of each node to a pointer to each node in memory
  this.left = new Node(0, 0); //a dummy node to help swiftly find the LRU el
  this.right = new Node(0, 0); //a dummy node to help swiftly find the MRU el
  this.left.next = this.right;
  this.right.prev = this.left;
};

//helper method to insert a node to the right of the list (a newly added node is the MRU el)
LRUCache.prototype.insert = function(node) {
  let nodeBeforeRight = this.right.prev;
  nodeBeforeRight.next = node;
  node.prev = nodeBeforeRight;
  node.next = this.right;
  this.right.prev = node;
}

//helper method to remove a node from the DLL
LRUCache.prototype.remove = function(node) {
  let prevNode = node.prev;
  let nextNode = node.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;
  node.next = null;
  node.prev = null; 
}

//helper method to move a node to the MRU position
LRUCache.prototype.moveToHead = function(node) {
  this.remove(node);
  this.insert(node);
}

LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    //if the key already exists, update its val
    let node = this.cache.get(key);
    node.val = value;
    this.moveToHead(node);
  } else {
    //if not, add the new el to the DLL
    let newNode = new Node(key, value);
    this.insert(newNode);
    this.cache.set(key, newNode);
    if (this.cache.size > this.capacity) {
      //if cache exceeds capacity on addition of new el then remove the LRU el
      let LRU = this.left.next;
      this.remove(LRU);
      this.cache.delete(LRU.key);
    }
  } 
};

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    //make the newly accessed node the MRU el
    let node = this.cache.get(key);
    this.moveToHead(node);

    //return its val
    return node.val;
  }
  return -1;
};


//L.147 (Medium)
var insertionSortList = function(head) { //MAG. time O(n^2) at worst. space O(1).
  //the dummy head makes inserting a node into the head of the list as easy as inserting a
  //node between 2 nodes. Also the head of the new list can be easily gotten through DH.next
  let dummyHead = new ListNode(-1, head);
  let prev = head;
  let curr = head.next;

  while (curr) {
    //if curr.val >= val of the node just b4 it then move to next the node (it's sorted)
    if (curr.val >= prev.val) {
      prev = curr;
      curr = curr.next;
      continue;
    }

    //else find the suitable position to insert curr node
    let temp = dummyHead;
    while (curr.val >= temp.next.val) {
      //we stop this iteration on temp when the val of curr node to insert < val of 
      //temp.next. Then curr can be inserted in between temp and temp.next
      temp = temp.next;
    }
    prev.next = curr.next;
    curr.next = temp.next;
    temp.next = curr;

    curr = prev.next;
  }

  return dummyHead.next;
};

//L.148 (Medium)
function getNodeBeforeMid(list) { 
  let prev;
  let slow = list;
  let fast = list;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  //prev can never be undefined as this func will always be called with at least 2 nodes
  return prev;
}

function merge(list1, list2) {
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  } else if (list2) {
    curr.next = list2;
  }

  return dummyHead.next;
}

var sortList = function(head) { //AAT. time O(nlogn). space O(logn) {recursive call stack}
  if (!head || !head.next) return head;
  let left = head;
  let nodeBeforeMid = getNodeBeforeMid(head);
  let right = nodeBeforeMid.next;
  nodeBeforeMid.next = null;

  let sortedLeft = sortList(left);
  let sortedRight = sortList(right);
  return merge(sortedLeft, sortedRight);
};

//L.150 (Medium)
var evalRPN = function(tokens) { //AGL. time O(n). space O(n)
  const stack = [];
  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      if (token === '+') {
        stack.push(a + b);
      } else if (token === '-') {
        stack.push(a - b);
      } else if (token === '*') {
        stack.push(a * b);
      } else {
        stack.push(Math.trunc(a/b));
      }
    }
  }
  return stack[0];
};

//L.151 (Medium)
var reverseWords = function(s) { //AMA. time O(n). space O(n)
  const n = s.length;
  let res = '';

  let i = 0;
  while (i < n) {
    //skip white spaces till we get to the 1st letter of a word substring
    while (i < n && s.charAt(i) === ' ') i++;

    //if i ever goes out of bound while skipping white spaces then we're done
    if (i >= n) break;

    //else i is on the 1st letter of a sub in s. j is then used to determine the cur sub 
    //j stops when j is on a white space after cur sub or when it goes out of bound or
    let j = i + 1;
    while (j < n && s.charAt(j) !== ' ') j++;

    let sub = s.substring(i, j);

    if (res.length === 0) {
      res = sub;
    } else {
      res = sub + ' ' + res;
    }

    i = j + 1;
  }

  return res;
};

//L.152 (Medium)
var maxProduct = function(nums) { //ALM. time O(n). space O(1)
  let maxProduct = -Infinity;
  let curMin = 1, curMax = 1;
  for (let num of nums) {
    let curMaxTemp = Math.max(num, curMin * num, curMax * num);
    curMin = Math.min(num, curMin * num, curMax * num);

    curMax = curMaxTemp;
    maxProduct = Math.max(maxProduct, curMax);
  }
  return maxProduct;
};
//L.153 (Medium)
var findMin = function(nums) { //AMF. time O(logn). space O(1)
  //to rotate by 4 is to take the 4 rightmost nums and put in the beginning of the array
  let left = 0;
  let right = nums.length - 1;
  let res = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    res = Math.min(res, nums[mid]);
    
    //since when the arr was rotated, the larger values at the rightside of the ascending
    //arr are put to it's left side.Therefore the values on the left are now larger and the
    //right smaller. if nums[mid] falls on the left sorted portion then we wish to search 
    //the right sorted portion of the rotated arr with smaller values to find the min val

    if (nums[mid] >= nums[right]) {
      //search the right side as it contains the smaller digits
      left = mid + 1;
    } else {
      //else search left side as it now contains the smaller digits
      right = mid - 1;
    }
  }
  return res;
};

//L.155 (Medium)
var MinStack = function() { //BAM
  this.stack = [];
};

MinStack.prototype.push = function(val) {
  if (!this.stack.length) {
    this.stack.push([val, val]);
  } else {
    this.stack.push([val, Math.min(val, this.getMin())])
  }
};

MinStack.prototype.pop = function() {
  this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1][1];
};

//L.200 (Medium)
var numIslands = function(grid) { //AGF. time O(N) {N is board cells}, space O(N) {call stack}
  const rows = grid.length;
  const cols = grid[0].length;

  let islands = 0;

  function visit(r, c) {
    //if r/c gets out of bound or we visit water or we visit an already visited land
    if (r < 0 || r === rows || c < 0 || c === cols 
      || grid[r][c] === '0' || grid[r][c] === 'I') return;

    grid[r][c] = 'I';
    visit(r - 1, c);
    visit(r + 1, c);
    visit(r, c - 1);
    visit(r, c + 1);
  }

  //visit all unvisited land grid cell and mark neigbouring lands as an island (I)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        visit(r, c);
        islands++;
      }
    }
  }

  return islands;    
};

//L.206 (Nedium)
var canFinish = function(numCourses, prerequisites) { //GAA. time, space O(m + n) 
  //initialize a barebones adjacency list using each of the courses.
  const adjacencyList = {};
  for (let i = 0; i < numCourses; i++) {
    adjacencyList[i] = [];
  };

  //map each course (vertex) to their prerequisites [A DIRECTED GRAPH]
  for (const [course, pre] of prerequisites) {
    adjacencyList[course].push(pre);
  }

  //a set to keep track of already visited vertices in the current path check
  const visited = new Set();

  function canFinishCheck (course) {
    //if the course has already been visited i.e a loop (so it cannot be finished)
    if (visited.has(course)) return false;

    //if the course has no prerequisites, then it can be finished
    if (!adjacencyList[course].length) return true;

    visited.add(course);

    for (let pre of adjacencyList[course]) {
      //if a pre of a course can't be finished. Then the course itself can't be finished
      if (!canFinishCheck(pre)) return false;
    }

    //else it is possible to finish the course
    //remove the course from the visited set cause we're done visiting it in cur path check
    visited.delete(course);

    //at this point we're sure the course can be finished so we clear out it's prereqs
    adjacencyList[course] = [];

    return true;
  }

  //since we're not certain all vertices are connected e.g if we have a graph {0:[1], 2:[3]}
  //then we need to visit all vertexes. if any course is impossible, then we can't finish all
  for (let i = 0; i < numCourses; i++) {
    if (!canFinishCheck(i)) return false;
  };

  //if the loop completes successfully, then it's possible to finish all courses
  return true;
};

//L.211 (Medium)
var TrieNode = function() {
  this.children = {}; // { b: TrieNode(), a: TrieNode() }
  this.word = false;
};

var WordDictionary = function() {
  this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
  let curr = this.root;

  //insert every character in word into our Trie
  for (let c of word) {
    if (!(c in curr.children)) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }

  curr.word = true;    
};

WordDictionary.prototype.search = function(word) {
  function dfs (i, root) {
    let curr = root;

    for (let j = i; j < word.length; j++) {
      let c = word[j];

      if (c === '.') {
        for (let child of Object.values(curr.children)) {
          if (dfs(j + 1, child)) return true;
        }
        return false;
      } else {
        if (!(c in curr.children)) return false;
        curr = curr.children[c];
      }
    }
    return curr.word;
  }
  
  return dfs(0, this.root);
};

//L.215 (Medium)
var findKthLargest = function(nums, k) { //FAG. time: O(n + klogn), spcace: O(n)
  const maxHeap = [];
  
  //heapify the array
  for (let num of nums) { //O(n)
    maxHeap.push(num);

    let idx = maxHeap.length - 1;
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = maxHeap[parentIndex];

      if (num <= parent) break;

      maxHeap[parentIndex] = num;
      maxHeap[idx] = parent;

      idx = parentIndex;
    }
  }

  //extract from the maxHeap k times to determine the kth largest element
  let kthLargest;
  for (let i = 0; i < k; i++) { //O(klogn)
    if (maxHeap.length <= 0) return undefined;

    [maxHeap[maxHeap.length - 1], maxHeap[0]] = [maxHeap[0], maxHeap[maxHeap.length - 1]];
    kthLargest = maxHeap.pop();

    let length = maxHeap.length;
    let idx = 0;
    let el = maxHeap[0];
    while (idx < length) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null; 

      if (leftChildIdx < length) {
        leftChild = maxHeap[leftChildIdx];
        if (leftChild > el) {
          swapIdx = leftChildIdx;
      }
      }

      if (rightChildIdx < length) {
        rightChild = maxHeap[rightChildIdx];
        if ((!swapIdx && rightChild > el) || (swapIdx && rightChild > leftChild)) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break; 

      maxHeap[idx] = maxHeap[swapIdx];
      maxHeap[swapIdx] = el;
      idx = swapIdx;
    }
  }

  return kthLargest;
}

//L.227 (Medium)
var calculate = function(s) { //time: O(n), space: O(n)
  const stack = [];
  let curNum = 0;
  let operator = '+';

  for (let i = 0; i < s.length; i++) {
    const curChar = s.charAt(i);

    //if current char is an integer (single or many digits integer)
    if (curChar !== ' ' && !isNaN(curChar)) {
      curNum = (curNum * 10) + parseInt(curChar);
    }
    
    //if current char is an operator OR the char is the last char in s
    if (curChar !== ' ' && isNaN(curChar) || i === s.length - 1) {
      if (operator === '+') {
        stack.push(curNum);
      } else if (operator === '-') {
        stack.push(-curNum);
      } else if (operator === '*') {
        stack.push(stack.pop() * curNum);
      } else if (operator === '/') {
        stack.push(Math.trunc(stack.pop() / curNum));
      }

      //reset curNum as a seperating operator has been encountered, also update operator
      curNum = 0;
      operator = curChar;
    }
  }
  
  return stack.reduce((acc, cur) => acc + cur, 0);
};

//L.230 (Medium)
var kthSmallest = function(root, k) {
  //Time: O(logN + k) for a balanced tree, O(N + k) for a skewed tree 
  //Space: O(logN) for a balanced tree, O(N) for a skewed tree 
  const stack = [];
  let curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    if (--k === 0) return curr.val;
    curr = curr.right;
  }
};

//L.236 (Medium)
var lowestCommonAncestor = function(root, p, q) { // Time: O(N). Space: O(N)
  // If either p or q is the root node then that's the LCA of both
  if (p === root || q === root) return root;
  
  let left, right;
  if (root.left) left = lowestCommonAncestor(root.left, p, q);

  if (root.right) right = lowestCommonAncestor(root.right, p, q);

  // If p and q were found in the left and right subtree then curr root node is the LCA
  if (left && right) return root;

  // If both were found in the left subtree, then the first encountered (p or q) is the LCA
  if (left) return left;

  // If both were found in the right subtree, then the first encountered (p or q) is the LCA
  if (right) return right;
};

//L.238 (Medium)
var productExceptSelf = function(nums) { // Time: O(n). Auxiliary Space: O(1)
  //the idea here is to multiply all ints before nums[i] and then multiply all ints after
  //nums[i]. The product of these 2 values is product of all elements except nums[i]

  const n = nums.length;
  const res = [1];

  // After this loop, res[i] reps the product of all integers before nums[i]
  for (let i = 1; i < n; ++i) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  
  // postProduct helps to keep track of the running product after nums[i]
  let postProduct = 1;
  for (let i = n - 1; i >= 0; --i) {
    res[i] = res[i] * postProduct;
    postProduct = postProduct * nums[i];
  }

  return res;
};

//L.253 (Medium)
var minMeetingRooms = function(intervals) { // Time: O(NlogN). Space: O(N)
  const start = intervals.map(el => el[0]).sort((a, b) => a - b);
  const end = intervals.map(el => el[1]).sort((a, b) => a - b);

  // Count is the running no of meetings going on at any given point in time
  let count = 0, res = 0, s = 0, e = 0;

  while (s < intervals.length) {
    if (start[s] < end[e]) {
      // If start[s] < end[e] then a new meeting has just begun
      count++;
      s++;
    } else {
      // Else if end[e] <= start[s] then a meeting has just ended
      count--;
      e++;
    }

    res = Math.max(res, count);
  }

  return res;
}

//L.314 (Medium)
var verticalOrder = function(root) { // Time: O(N). Space: O(N) {map used}
  const res = [];
  if (!root) return res;
  
  // ColumnTable rep each column mapped to the node values that lie on them e.g {0 => [2, 1]}
  const columnTable = new Map();
  let minColumn = maxColumn = 0;

  const queue = [[root, 0]];
  while (queue.length > 0) {
    const [node, column] = queue.shift();
  
    if (!columnTable.has(column)) columnTable.set(column, []);
    columnTable.get(column).push(node.val);

    minColumn = Math.min(minColumn, column);
    maxColumn = Math.max(maxColumn, column);

    if (node.left) queue.push([node.left, column - 1]);
    if (node.right) queue.push([node.right, column + 1]);
  }

  for (let i = minColumn; i <= maxColumn; i++) {
    res.push(columnTable.get(i));
  }

  return res;
}

//L.322 (Medium)
var coinChange = function(coins, amount) { // Time: O(amount * N). Space: O(amount)
  // minCoinsDP[i] rep the min no of coins needed to arrive at amount i
  const minCoinsDP = new Array(amount + 1).fill(amount + 1);

  minCoinsDP[0] = 0; // Base Case: 0 amount requires a min of 0 coin

  for (let i = 1; i < minCoinsDP.length; i++) {
    // i === amount of money
    for (let coin of coins) {
      if (i - coin < 0) continue;
      minCoinsDP[i] = Math.min(minCoinsDP[i], 1 + minCoinsDP[i - coin]);
    }
  }

  //if the initializing min hasn't been updated, then no coin combo found ==> -1
  return minCoinsDP[amount] === amount + 1 ? - 1  : minCoinsDP[amount];
};

//L.450 (Medium)
var deleteNode = function(root, key) { // Time: O(logN). Space: O(logN)
  if (!root) return root;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // If the node to be deleted has no left node/subtree
    if (!root.left) return root.right;

    // If the node to be deleted has no right node/subtree
    if (!root.right) return root.left;

    // The node to be deleted has both left and right node/subtree
    let curr = root.right;

    // Curr stops on d smallest val in the right subtree (leftest node W/O a left node)
    while (curr.left) curr = curr.left;
    
    // Assign left subtree of node to be deleted to the left of curr
    curr.left = root.left;
    return root.right;
  }

  return root;
};

//L.701 (Medium)
var insertIntoBST = function(root, val) { //Time: O(logN) at best, O(N) worst. Space: O(1)
  const newNode = new TreeNode(val);
  if (!root) {
    root = newNode;
  } else {
    let curNode = root;
    while (true) {
      if (val === curNode.val) return undefined;
      if (val < curNode.val) {
        if (!curNode.left) {
          curNode.left = newNode;
          break;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = newNode;
          break;
        }
        curNode = curNode.right;
      }
    }
  }

  return root;
};

//L.1143 (Medium)
var longestCommonSubsequence = function(text1, text2) { //time and space O(m * n)
  //base case: if any or both of the texts are empty LCS is 0

  const m = text1.length;
  const n = text2.length;

  //each cell in dp rep the longest common subseqeunce between the current substr starting  
  //at cur position in word1 and word2. The substrs are constructed left to right till we get
  //to the 1st char of both words (substr starting at 0,0 are the words) => res == dp[0][0]
  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  
  //iterate backwards over both words (and simultaneously over dp nested array)
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      //if the 2 chars match then we add 1 (1 cause we just found 1 valid subsequence) 
      //plus the res of the substrs formed by text1[i + 1] and text2[j + 1]
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
      //else we figure out which will give the LCS between the substr formed by
      //text1[i] and text2[j + 1] OR the substr formed by text1[i + 1] and text2[j]
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  //console.log(dp);
  return dp[0][0];
};


//L.4 (Hard)
var findMedianSortedArrays = function(nums1, nums2) {
  let A = nums1;
  let B = nums2;

  //we're to run binary search on the smaller array (make sure A points to the smaller arr)
  if (nums2.length < nums1.length) {
    A = nums2;
    B = nums1;
  }

  //determine the total length of both arrays
  const total = A.length + B.length;

  //determine the integer half of the 2 arrays' total length
  const half = Math.floor(total / 2);

  let left = 0, right = A.length - 1;
  while (true) {
    let midA = Math.floor((left + right) / 2); 
    let midB = half - (midA + 1) - 1;    

    let Aleft = midA >= 0 ? A[midA] : -Infinity; //val in left partition of A
    let Aright = midA + 1 < A.length ? A[midA + 1] : Infinity;//val in right partition of A
    let Bleft = midB >= 0 ? B[midB] : -Infinity; //val in left partition of B
    let Bright = midB + 1 < B.length ? B[midB + 1] : Infinity;//val in right partition of B

    if (Aleft <= Bright && Aright > Bleft) {
      //if partition is correct and the total no of elements is odd
      if (total % 2 !== 0) return Math.min(Aright, Bright);
      
      //else if partition is correct and the total no of elements is even
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;  
    } else if (Aleft >  Bright) {
      //Aleft is too big, reduce the size of the left partition from A
      right = midA - 1;
    } else {
      //Aleft is too small, increase the size of the left partition from A
      left = midA + 1;
    }
  }
}

//L.23 (hard)
var merge = function(list1, list2) {
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;

  while(list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  } else if (list2) {
    curr.next = list2;
  }

  return dummyHead.next;
};

var mergeKLists = function(lists) { //GTA. time O(nlogk). space O(1)
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    const merged = [];

    //merge the LLs in the lists arr in pairs and push each resulting list to the merged arr
    for (let i = 0; i < lists.length; i+=2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      merged.push(merge(l1, l2));
    }

    //now lists arr with e.g 8 LLs has now been merged into the merged arr with e.g 4 LLs
    //lists now becomes the merged arr and we do this till we've merged all LLs into 1 final LL
    lists = merged;
  }

  return lists[0];
};