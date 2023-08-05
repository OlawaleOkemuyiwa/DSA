//SEARCHING THROUGH ARRAYS AND STRINGS
//LINEAR SEARCH is checking each element of an array/string to check for the search criteria e.g indexOf, includes, find, findIndex
//At worse we have to check for ALL elements of the array (if the element is the last one or isnt part of the array) i.e Big O is O(n) --> linear == linear search. At best we find the element right away --> O(1) e.g the element is the first element of the array.
// function linear(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) return i;
//   }
//   return -1;
// }
// console.log(linear([1, 2, 3, 4], 11));

//BINARY SEARCH works on sorted array where instead of eliminating one element at a time, we eliminate half of the remaining elements of the array at a time
//worst/average case --> O(logn), best case --> O(1)
// function binary(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right)/2);
    
//     if (val === arr[mid]) {
//       return mid;
//     } else if (val > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }
// console.log(binary([2, 5, 9, 14, 17, 28], 15));

//NAIVE STRING SEARCH e.g count the no of times a smaller string appear in a longer string
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;

      if (j === short.length - 1) count++;
    }
  }
  return count;
}
console.log(naiveSearch("lorie loled lola", "lol"));
