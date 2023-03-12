// const reverseString = string => {
//     return string.split('').reverse().join('');
// }

// function checkPalindrome(input) {
//   const re = /[^A-Za-z0-9]/g; //or  /[\W_]/g  ; this regex matches any character that is not enclosed in the bracket, that is matches anything that isnt A-Z, a-z, and 0-9. Then they are replaced with nothing(that is removed from the string)
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

/* 1. FREQUENCY COUNTER PATTERN */

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


/* MULTIPLE POINTERS TECHNIQUE (TWO POINTERS)
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

/* 3. SLIDING WINDOW PATTERN 
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


/* 4. DIVIDE AND CONQUER APPROACH --> Example is how merge sort works. When an array to be sorted is provided, 1st thing to do is divide the array down to individual arrays of size 1 || 0 (DIVIDE). An array of 1 el is sorted so we merge these sub arrays accordingly using the 2 pointers technique till we get the overall array sorted (CONQUER)
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

/* 5. BACKTRACKING ALGORITHMIC TECHNIQUE --> Backtracking is a general algorithmic technique for finding all (or some) solutions to a computational problem by incrementally building candidates to the solutions and abandoning a candidate ("backtracking") as soon as it determines that the candidate cannot possibly be completed to a valid solution
The technique is particularly useful for problems that cannot be solved by brute force, and require a more sophisticated approach to finding all solutions, such as the traveling salesman problem, N-queens problem, or Sudoku.
The process involves choosing a move and making it, then recursively solving the subproblem that arises as a result of making that move. If the move leads to a solution, it is recorded. If not, the move is undone and another move is tried. The process is repeated until all possible solutions have been found.

There are 3 keys to keep in mind while solving backtracking problems --> Our choice, Our constraints, Our goal (CCG). 
 */

//LEETCODE SOLUTIONS
//L.1 (Easy)
var twoSum = function(nums, target) { //unsorted array
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

//L.167 (Medium)
var twoSumII = function(numbers, target) { //non-decreasing sorted array
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};


//L.9 (Easy)
var isPalindrome = function(x) {
  if (x < 0) return false; 

  let num = x;
  let revNum = 0;
  while (num > 0) {
    revNum = (revNum * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  return x === revNum;
  
  //O(log10x) where x == integer --> if the digit is 4567, we iterate 4 times
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
var mergeTwoLists = function(list1, list2) {
  let mergedList = new ListNode();

  //save a reference pointer to the head of the mergedList to be constructed(or it would be lost)
  let head = mergedList;

  while(list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  if (list1) {
    mergedList.next = list1;
  } else if (list2) {
    mergedList.next = list2;
  }

  return head.next;
};

//L.26 (Easy)
var removeDuplicates = function(nums) {
  //insertIndex helps keep track of where non-duplicate elements are to be inserted in nums arr
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    //starting from the first el, loop over the nums arr till we encounter a 
    //non-duplicate element which is then inserted at the current insertIndex 
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    nums[insertIndex] = nums[i];
    insertIndex++;
  }
  return insertIndex;
};

//L.27 (Easy)
var removeElement = function(nums, val) {
  //insertIndex helps keep track of where non-ocurrence of val are to be inserted in nums arr
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    //starting from the first el, loop over the nums arr till we encounter a 
    //non-ocurrence of val which is then inserted at the current insertIndex
    if (nums[i] !== val) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

//L.35 (Easy)
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
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
    //if the current digit (starting from the back) is 9 then change to 0 (9 + 1 == 10 => 0)
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      //if not 9 then just increment by 1 and return the resulting array
      digits[i]++;
      return digits;
    }
  }
  //coming out of the loop (nothing was returned) signifies digits array comprises only of
  //digit 9 i.e [9] or [9, 9] and 1 needs to be added to the front of the mutated digits array.
  digits.unshift(1);

  return digits;
};

//L.67 (Easy)
var addBinary = function(a, b) {
  let str = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += Number(a.charAt(i));
    if (j >= 0) sum += Number(b.charAt(j));
    str = str + (sum % 2);
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }

  if (carry !== 0) { //i.e. carry === 1
    str = str + carry;
  }

  return str.split("").reverse().join("");
};

//L.69 (Easy)
var mySqrt = function(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x/2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
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
  let currentNode = head;
  while (currentNode && currentNode.next) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};

//L.88 (Easy)
var merge = function(nums1, m, nums2, n) {
  //i, j are pointers for nums1, nums2 respectively starting at end of elements of each array
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

  let curr = root;
  const stack = [];
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
  function isMirror (p, q) {
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
  console.log(maxDepthOfTree);
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

    //continue the check on both left and right subtree. Whichever reaches the target first
    return helper(node.left, curSum) || helper(node.right, curSum);
  }
  return helper(root, 0);
};

//L.118 (Easy)
var generate = function(numRows) {
  const res = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
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

  for (let i = 0; i < rowIndex; i++) {
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
  //get a new buyprice to achieve maxprofit or a better sellprice for maxprofit
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= buyprice) {
      buyprice = prices[i];
    } else {
      maxprofit = Math.max(prices[i] - buyprice, maxprofit)
    }
  }     
  return maxprofit
};

//L.125 (Easy)
var isPalindrome = function(s) {
  function isCharAlphanumeric(char) {
    const charCode = char.charCodeAt(0);
    if ((charCode > 47 && charCode < 58) ||         
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123)) {       
      return true ;
    }
    return false;
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

//L.136 (Easy)
var singleNumber = function(nums) {
  //A map to store the integers and their corresponding counts
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  //the key of the map with value of 1 is our desired integer
  for (const [key, value] of map.entries()) {
    if (value === 1) return key;
  }

  //The only way to achieve constant space complexity is BIT MANIPULATION
};

//L.141 (Easy)
var hasCycle = function(head) {
  //Floyd's tortoise & hare: O(n) time, O(1) space
  let slow = head;
  let fast = head;

  //incase the list doesn't have a cycle in it, we do not wish to enter 
  //the loop for the lastNode as fast = lastNode.next.next is null.next (error)
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    //if the list has a cycle in it, slow and fast would meet at some point in the list
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
  const head = summedList;
  let carry = 0;
  while (l1 || l2 || carry !== 0) {
    //we always sum up carry, val1, val2 so its paramount to have a default value of 0 for
    //val1 and val2. Should l1 or l2 become null then val1 or val2 won't be undefined but 0
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = carry + val1 + val2;
    const digit = sum % 10; 
    carry = Math.floor(sum / 10); 
    const currentNode = new ListNode(digit);
    summedList.next = currentNode;
    summedList = summedList.next;
  }
  return head.next;
};

//L.3 (Medium)
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
    maxLength = Math.max(end - start + 1, maxLength);
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
  //step determines how index moves from left to right, right to left, repeat over zigzag arr
  let step;

  for (let char of s) {
    zigzag[index] += char;

    if (index === 0) {
      //if index is at the beginning of zigzag arr move rightwards
      step = 1;
    } else if (index === numRows - 1) {
      //if index is at the end of zigzag arr move leftwards
      step = -1;
    }
    
    index += step;
  }
  return zigzag.join('');
};

//L.7 (Medium)
var reverse = function(x) {
  let num;
  if (x >= 0) {
    num = x;
  } else {
    num = Math.abs(x);
  }
  let revNum = 0;
  while (num > 0) {
    revNum = (revNum * 10) + (num % 10);
    num = Math.floor(num/10); 
  }
  revNum = x >= 0 ? revNum : -1 * revNum;
  if (revNum < -Math.pow(2, 31) || revNum > Math.pow(2, 31) - 1) return 0;
  return revNum;
};

//L.8 (Medium)
var myAtoi = function(s) {
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
    num = (num * 10) + parseInt(s.charAt(i));
    i++;
  }

  num = sign * num;
  
  if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return num;
};

//L.11 (Medium)
var maxArea = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let area = minHeight * (right - left);
    maxArea = Math.max(area, maxArea);
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
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let roman = '';
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    let symbol = symbols[i];
    
    if (Math.floor(num/value) > 0) {
      let count = Math.floor(num/value);
      roman += symbol.repeat(count);
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
      if (Math.abs(target - curSum) < Math.abs(target - closetSum)) closetSum = curSum;
      if (curSum < target) {
        left++;
      } else if (curSum > target) {
        right--;
      } else {
        return curSum;
      }
    }
  }
  return closetSum;
};

//L.17 (Medium)
var letterCombinations = function(digits) { //backtracking
  const res = [];
  if (digits.length === 0) return res;
  
  const obj = {
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
    if (curStr.length === digits.length) {
      //every single digit has been mapped to a char, push curStr to res and we're done
      res.push(curStr);
      return;
    } 
    for (let char of obj[digits[i]]) {
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
  
  let dummyHead = new ListNode();
  dummyHead.next = head;

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
var generateParenthesis = function(n) { //backtracking
  const res = [];

  function helper(open, close, curStr) {
    //open = no of opening parantheses ("(") we have left to combine
    //close = no of closing parantheses (")") we have left to combine
      
    if (open === 0 && close === 0) {//OR if curStr.length === n * 2
      res.push(curStr);
      return;
    }

    if (open > 0) {
      helper(open - 1, close, curStr + '(');
    }

    if (close > open) {
      helper(open, close - 1, curStr + ')');
    } 
  }
  //at start we've n opening and closing paranthesis to combine to form a valid parentheses
  helper(n, n, '');
  return res;
};

//L.24 (Medium)
var swapPairs = function(head) {
  //dummyHead serves as prev during the 1st swap to help maintain a valid list after the
  //list is broken up and d 1st pair are swapped. prev.next (which is dummyHead.next during  
  //1st swap) then connects to the newly swapped list nodes. prev then moves to curr while 
  //curr moves to nextPair to be swapped. now prev.next can again serve to link the current 
  //list to the resulting list after the swap 
  
  let dummyHead = new ListNode();
  dummyHead.next = head;

  let curr = head;
  let prev = dummyHead;

  //we must have at least 2 nodes (cur and cur.next) to swap, if not we done
  while (curr && curr.next) {
    //save pointers
    let second = curr.next;
    let nextPair = curr.next.next;

    //reverse pair
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    //update pointers
    prev = curr;
    curr = nextPair;
  }

  return dummyHead.next;
};

//L.28 (Medium)
var strStr = function(haystack, needle) { //first occurence of a substring
  let m = haystack.length;
  let n = needle.length;

  for (let windowStart = 0; windowStart <= m - n; windowStart++) {
    for (let i = 0; i < n; i++) {
      //as i moves over needle, also use i to move windowStart rightwards over haystack 
      if (needle[i] !== haystack[windowStart + i]) {
        break;
      }

      //if the last char of needle corresponds to the equivalent char of haystack we done 
      if (i === n - 1) {
        return windowStart;
      }
    }
  }

  return -1;
};

var strStrII = function(haystack, needle) { //last occurence of a substring
  let m = haystack.length;
  let n = needle.length;
  let index = -1;

  for (let windowStart = 0; windowStart <= m - n; windowStart++) {
    for (let i = 0; i < n; i++) {
      //as i moves over needle, also use i to move windowStart rightwards over haystack 
      if (needle[i] !== haystack[windowStart + i]) {
        break;
      }

      //if the last char of needle corresponds to the equivalent char of haystack we done 
      if (i === n - 1) {
        index = windowStart;
      }
    }
  }

  return index;
};

//L.29 ???

//L.31 (Medium)
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
function findPivotIndex(arr) {
  let left = 0;
  let right = arr.length - 1;

  //if nums isn't rotated then arr[left] would be <= arr[right] and no need to find pivot
  if (arr[left] <= arr[right]) return 0;

  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[left] <= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function binarySearch(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

var search = function(nums, target) {
  //find the pivot index of nums using binary seach (ologn)
  let pivot = findPivotIndex(nums);

  //if nums isn't rotated, pivot is 0 and we binary search over entire nums for target   
  if (pivot === 0) return binarySearch(nums, 0, nums.length - 1, target);

  //find the target index in one of the two sub array divided by pivot (ologn)
  if (nums[pivot] === target) return pivot;
  if (nums[0] > target) return binarySearch(nums, pivot, nums.length - 1, target);
  return binarySearch(nums, 0, pivot - 1, target);
};

//L.34 (Medium)
function binarySearch(arr, left, right, target, firstIndexSearch) {
  let indx = -1;
  while(left <= right) {
    let mid = Math.floor((left + right)/2);
    if (arr[mid] === target) {
      indx = mid;
      firstIndexSearch ? right = mid - 1 : left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }
  return indx;
}

var searchRange = function(nums, target) {
  let indx1 = binarySearch(nums, 0, nums.length - 1, target, true);
  if (indx1 === -1) return [-1, -1];
  let indx2 = binarySearch(nums, indx1, nums.length - 1, target, false);
  return [indx1, indx2];
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
var combinationSum = function(candidates, target) {
  const res = [];

  function helper(i, arr, sum) {
    if (i >= candidates.length || sum > target) return;

    if (sum === target) {
      res.push(arr.slice());
      return;
    }
    
    arr.push(candidates[i]);
    helper(i, arr, sum + candidates[i]);
    arr.pop();
    helper(i + 1, arr, sum); 
  }
  helper(0, [], 0);
  return res;
};

//L.40 (Medium)
var combinationSum2 = function(candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);

  function helper(index, arr, sum) {
    if (sum > target) return;

    if (sum === target) {
      res.push(arr.slice());
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      if (target - sum < candidates[i]) break;
      arr.push(candidates[i]);
      helper(i + 1, arr, sum + candidates[i]);
      arr.pop();
    } 
  }
  helper(0, [], 0);
  return res;
};

//L.216 (Medium)
var combinationSum3 = function(k, n) {
  const res = []

  function helper(arr, start, sum) {
    //when the running sum exceeds target n, then we're out of bound
    if (sum > n) return;
    
    //when arr being constructed becomes of length k (max length arr can be), then we done  
    //check  if the running sum is equal desired value n and push to result.
    if (arr.length === k) {
      if (sum === n) res.push(arr);
      return;
    }
    
    for (let i = start; i < 10; i++) {
      helper(arr.concat(i), i + 1, sum + i);
    }
  }
  helper([], 1, 0);
  return res;
};

//L.43 (Medium)
var multiply = function(num1, num2) { //time O(n * m), space O(n + m)
  if (num1 === "0" || num2 === "0") return "0";

  //reverse num1 and num2 strings
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  //the max length of res would be num1.length + num2.length
  let res = new Array(num1.length + num2.length).fill(0);

  for (let i = 0; i < num1.length; i++) {
    let a = num1.charAt(i);
    for (let j = 0; j < num2.length; j++) {
      let b = num2.charAt(j);

      let digit = a * b;
      res[i + j] += digit;
      res[i + j + 1] += Math.floor(res[i + j]/10);
      res[i + j] = res[i + j] % 10;
    }
  } 
  
  //skip the leading 0 if there is and join res (array of integers) to become a string
  res.reverse();
  return res[0] === 0 ? res.slice(1).join("") : res.join("");
};

//L.55 (Medium)
var canJump = function(nums) { //Greedy --> O(n) time, O(1) space
  let goalIdx = nums.length - 1;

  //from the idx just before the goalIdx, check if we can take a step (from the max steps 
  //available to take from at the idx, nums[i]) that will atleast get us to the goalIdx.
  for (let i = goalIdx - 1; i >= 0; i--) {
    if (i + nums[i] >= goalIdx) {
      //if we can, goalIdx moves to its position and cur idx leftwards
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
  let res = 0;

  //left and right marks the start and end idxs of the sub array window for BFS
  let left = 0;
  let right = 0;

  //we stop the loop when the right idx becomes the last idx
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
    res++;
  }

  return res;
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
  const map = new Map();

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
  return n >= 0 ? res : 1 / res;
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

    //overlap exists if the start of cur interval is <= to d end of the last interval in res
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
  //if the list is a null list then we can make no reversal
  if (!head) return head;

  //determine the length of the list (>= 1). It would have atleast a tail (the tail then
  //wouldn't be counted when looping accross the list)
  let length = 1; 
  let tail = head;
  while (tail && tail.next) {
    length++;
    tail = tail.next;
  }

  //determine the actual no of reversals to be done
  k = k % length;
  if (k === 0) return head;

  //move to the pivot and rotate
  let cur = head;
  for (let i = 0; i < length - k - 1; i++) {
    cur = cur.next;
  }
  let newHead = cur.next;
  cur.next = null;
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
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
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
  for (let col = 1; col < n; col++) {
    obstacleGrid[0][col] = obstacleGrid[0][col] === 1 ? 0 : obstacleGrid[0][col - 1];
  }

  //fill the cells of the first column. If cur cell is an obstacle, then there are 0 ways to 
  //get there from starting position. If not the no of ways is that of the cell just above it
  for (let row = 1; row < m; row++) {
    obstacleGrid[row][0] = obstacleGrid[row][0] === 1 ? 0 : obstacleGrid[row - 1][0];
  }

  //determine the no of possible unique paths for the remaining cells
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      if (obstacleGrid[row][col] === 1) {
        obstacleGrid[row][col] = 0;
        continue;
      } 
      obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1];
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
  for (let col = 1; col < n; col++) {
    grid[0][col] += grid[0][col - 1];
  }

  //fill the cells of the first column
  for (let row = 1; row < m; row++) {
    grid[row][0] += grid[row - 1][0];
  }

  //fill the remaining cells of the grid
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1])
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
      if (stack.length) stack.pop();
    } else {
      //if both earlier conditions are false then it's a valid directory to be added 
      stack.push(dir);
    }
  }
  
  return '/' + stack.join('/');
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
  let right = m * n - 1;
  while (left <= right) {
    let pivotIdx = Math.floor((left + right)/2);
    let pivotEl = matrix[Math.floor(pivotIdx/n)][pivotIdx % n];
    if (pivotEl === target) {
      return true
    } else if (pivotEl < target) {
      left = pivotIdx + 1;
    } else {
      right = pivotIdx - 1;
    }
  }
  return false;
};