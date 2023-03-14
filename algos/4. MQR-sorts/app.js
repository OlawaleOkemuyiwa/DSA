//MERGE SORT --> split an unsorted array into arrays of 1 or zero element, sort and merge the sorted arrays till we get 1 final sorted array
//It has the time complexity of O(nlogn) and a space complexity of O(n)

function merge(arr1, arr2) {
  //a function to merge 2 SORTED arrays into 1 SORTED array i.e [7, 8] + [1, 3, 5] => [1, 3, 5, 7, 8]
  let merged = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    merged = merged.concat(arr1.slice(i));
  } else {
    merged = merged.concat(arr1.slice(j));
  }

  return merged;
}
console.log(merge([8, 10, 41, 50, 51], [7, 11, 31]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([8, 7, 5, 1, 3]));

//QUICK SORT
// Big(O) --> time complexity == O(nlogn) on average and O(n^2) at worst. space complexity == O(logn)

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

//RADIX SORT
//time complexity == O(nk) [both on average and at worst] and space complexity == O(n+k)

// function getDigit(num, position) {  //e.g getDigit(453, 0) => 3, getDigit(453, 2) => 4
//   const numString = String(num).split("").reverse().join("");
//   if (position < 0 || position > numString.length - 1) {
//     return 0;
//   }
//   const digit = numString[position];
//   return Number(digit);
// }

// function digitCount(num) {    // e.g digitCount(32146) => 5
//   return String(Math.abs(num)).length;
// }

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigits(nums) {
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  let maxDigits = digitCount(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (digitCount(nums[i]) > maxDigits) {
      maxDigits = digitCount(nums[i]);
    }
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    //k is the longestNum size and it determines how many rounds of grouping our array into buckets we do i.e longestNum is 4321, k = 4  and we do 4 rounds (0, 1, 2, 3) of grouping nums into buckets
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = digitBuckets.flat();
  }
  return nums;
}

console.log(radixSort([230, 124, 5467, 3111, 67895]));
