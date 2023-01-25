// const reverseString = string => {
//     return string.split('').reverse().join('');
// }

// function checkPalindrome(input) {
//   const re = /[^A-Za-z0-9]/g; //or  /[\W_]/g  ; this regex matches any character that is not enclosed in the bracket, that is matches anything that isnt A-Z, a-z, and 0-9. Then they are replaced with nothing(that is removed from the string)
//   const lowRegStr = input.replace(re, "").toLowerCase(); //remove all spaces, punctuations and symbols then convert the resulting string to lowercase
//   // console.log(lowRegStr);
//   const reverseString = lowRegStr.split("").reverse().join("");

//   return lowRegStr === reverseString;
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

// function same (arr1, arr2) {
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
//   let right = sortedArr.length - 1;
//   let left = 0;

//   while (left < right) {
//     let sum = sortedArr[left] + sortedArr[right];
//     if (sum === target) {
//       return [sortedArr[left], sortedArr[right]];
//     } else if (sum > target) {
//       right--;
//     } else {
//       left++;
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
//   let right = 0

//   //Iterate over the array. Keep moving right forward until we encounter the first +ve element of the array (arr[right]). left is then made the value before that (i.e the last -ve element before the first +ve element)
//   while (right < arr.length && arr[right] < 0) {
//     right++;
//     left = right - 1;
//   }
  
//   //Inside the iteration, compare the squared elements between index left and index right, push/append the smaller element to the resulting array.
//   while (left >= 0 && right < arr.length) { 
//     if ((arr[left] * arr[left]) < (arr[right] * arr[right])) {
//       result.push((arr[left] * arr[left]));
//       left--;
//     } else {
//       result.push((arr[right] * arr[right]))
//       right++;
//     }
//   }

//   //After the iteration, our resulting array will have a sorted set of integers. What remains is the element(s) at index left and index right. We can subsequently push/append the remaining elements(s) to the resulting array.
//   while (left >= 0) {
//     result.push((arr[left] * arr[left]));
//     left--;
//   }

//   while (right < arr.length) {
//     result.push((arr[right] * arr[right]));
//     right++;
//   }

//   return result;
// }
// console.log(square2([-7, -3, 2, 3, 11]));
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
//     for (j = 0; j < n; j++) {
//       currentSum += arr[i + j];
//     }
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
//   return maxSum;
// }
// console.log(maxSumSubArray1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// O(n) using sliding window (FIXED WINDOW LENGTH, here the sliding window is always of length n)
// function maxSumSubArray2(arr, n) { //the maximum sum of k consecutive/contiguous elements of an array
//   if (k > arr.length) return;

//   let currentSum = 0;
//   let maxSum = 0;
//   for (i = 0; i < k; i++) { //find the sum of the first k elements. That would be our starting window
//     currentSum += arr[i];
//   }
//   maxSum = currentSum; //assuming the sum of the first k elements of the array is the maxSum for the mean time
//   for (i = k; i < arr.length; i++) { 
//     currentSum = currentSum + arr[i] - arr[i - k];
    
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }
// console.log(maxSumSubArray2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//VARYING WINDOW LENGTH, here the sliding window is of dynamic length
// function smallestSubarrayGivenSum(arr, targetSum) { //the least number of contiguous elements of an array that sums up to >= targetSum
//   let minWindowLength = Infinity;   //to be minimized and returned as the result
//   let currentWindowSum = 0;

//   let windowStart = 0;
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     currentWindowSum += arr[windowEnd];

//     while (currentWindowSum >= targetSum) { //while the currentWindowuSum is valid strink the left hand side to see if we could achieve a valid sum with a window of smaller length
//       minWindowLength = Math.min(minWindowLength, windowEnd - windowStart + 1); //the difference in end and start indices of the window is indexed so to get the actual length of the window we add 1. i.e the length of window from el in index 0 to el index 2 is 3
//       currentWindowSum -= arr[windowStart];
//       windowStart++; 

//       if (minWindowLength === 1) return 1;  //if we ever get a window length of 1 then we're done (length can't be 0 duur)
//     }
//   }
//   return minWindowLength;
// }
// console.group(smallestSubarrayGivenSum([1, 2, 2, 1, 8, 1, 3, 8], 10));

// VARYING WINDOW LENGTH
// function lengthOfLongestSubstring (string) { //longest distinct substring length of a given string
//   if (string.length === 0) return 0;
//   if (string.length === 1) return 1;

//   let maxLength = 0;
//   let set = new Set();

//   let start = 0;
//   for (let end = 0; end < string.length; end++) {
//       while (set.has(string.charAt(end))) { //whenever the char we're on is already in the set, i.e we no longer have distinct substring sequence and then we try to start a new one (window)
//           set.delete(string.charAt(start)); 
//           start++;
//       }
//       set.add(string.charAt(end));
//       maxLength = Math.max(maxLength, end - start + 1);
//   }
//   return maxLength;
// };

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
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1); 
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


//LEETCODE SOLUTIONS
//L.1 (easy)
var twoSum = function(nums, target) {
  //map === already visited elements of the array and their indexes
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    //x === number to add to the current element of nums array to give the target
    if (map.has(x)) {
      return [map.get(x), i];
    } else {
      map.set(nums[i], i);
    } 
  }
};

//L.9 (easy)
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

//L.13 (easy)
var romanToInt = function(s) {
  const obj = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  if (s.length === 1) return obj[s.charAt(0)];

  let int = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(obj[s.charAt(i + 1)]);
    if (obj[s.charAt(i)] < obj[s.charAt(i + 1)]) {
      int += obj[s.charAt(i + 1)] - obj[s.charAt(i)];
      i++;
    } else {
      int += obj[s.charAt(i)]
    }
  }

  return int;
};

//L.14 (easy)
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) { 
      //the index of a valid prefix of a string must be 0. If it's not 0 (e.g -1 or 1, 2)
      //then its not a valid prefix and its last char is removed then checked again 
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return "";
    }  
  }    
  return prefix;
};

//L.20 (easy)
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

//L.21 (easy)
var mergeTwoLists = function(list1, list2) {
  let mergedList = new ListNode();

  //save a reference to the head of the mergedList to be constructed(or it would be lost)
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

//L.26 (easy)
var removeDuplicates = function(nums) {
  //insertIndex helps keep track of where non-duplicate elements are to be inserted in nums arr
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    //starting from the first el, loop over the nums arr till we encounter a 
    //non-duplicate element which is then inserted at the current insertIndex 
    if (nums[i] !== nums[i - 1]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

//L.27 (easy)
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

//L.35 (easy)
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

//L.58 (easy)
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

//L.66 (easy)
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

//L.67 (easy)
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

  if (carry !== 0) { //therefore carry === 1 (base 2)
    str = str + carry;
  }

  return str.split("").reverse().join("");
};

//L.69 (easy)
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

//L.70 (easy)
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

//L.83 (easy)
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

//L.88 (easy)
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

//L.94 (easy)
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

//L.100 (easy)
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

//L.101 (easy)
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

//L.104 (easy)
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

//L.108 (easy)
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

//L.110 (easy)
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

//L.111 (easy)
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

//L.112 (easy)
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

//L.118 (easy)
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

//L.119 (easy)
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

//L.121 (easy)
var maxProfit = function(prices) {
  //make price on day 1 the initial buyprice
  let buyprice = prices[0];

  //maxprofit is 0 at this point cause no profit has been achieved yet 
  let maxprofit = 0

  //loop through the rest of the prices. From the remaining prices, we could either 
  //get a new buyprice to achieve maxprofit or a better sellprice for maxprofit
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyprice) {
      buyprice = prices[i];
    } else {
      maxprofit = Math.max(prices[i] - buyprice, maxprofit)
    }
  }     
  return maxprofit
};

//L.125 (easy)
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

//L.136 (easy)
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

//L.141 (easy)
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

//L.144 (easy)
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

//L.145 (easy)
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

//L.2 (Medium)
var addTwoNumbers = function(l1, l2) {
  let summedList = new ListNode();
  const head = summedList;
  let carry = 0;
  while (l1 || l2 || carry !== 0) {
    //we always sum up carry, val1, val2 so its paramount to have a default value of 0 for
    //val1 and val2. Incase l1 or l2 becomes null then val1 or val2 won't be undefined but 0
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

//L.2 (Medium)