//BUBBLE SORT --> The largest number bubbles up to the end of the array (i.e placing the largest value in the cur iteration of an array to it's appropriate location at the end of the array)
//BigO --> at worst O(n^2), at best O(n) as it is most efficient for an almost sorted array right after insertion sort

// function swap1(arr, indx1, indx2) {
//   const temp = arr[indx1];
//   arr[indx1] = arr[indx2];
//   arr[indx2] = temp;
// }

// function swap2(arr, indx1, indx2) {
//   [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
// }

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) { //i outer loop serves as a pointer guard for where j should stop. j does the actual comparison starting from the first element to the last unsorted element, comparing and swapping when neccessary
//     let noSwap = true; //for optimization, when we start the sorting process there is being no swap made yet (i.e noSwap = true). This is updated to false for a loop where a swap is made. When we go through the array and no swap is done then the array is already sorted and there is no need to keep iterating (looking for digits to swap) so we break out of loop and we're done
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwap = false;
//       }
//     }
//     if (noSwap) break; //this will run when arr[j] is being compared with all elements to the right [from start of j to end] in order to bubble the biggest number for that loop of i and no swap occurs i.e arr[j] is the smallest element and cannot swap with any as they're all larger therefore the array is already sorted. So we're done and no need for another round of checking and swapping.
//   }
//   return arr;
// }
// console.log(bubbleSort([21, 9, 1, -3, 5, 2, 7, 1, 2, -9, 8, 5]));

//SELECTION SORT --> iterating the array from the beginning to the end looking for the smallest value. At the end of each iteration the smallest value is inserted at the beginning of the iteration and the next iteration starts from the next value
//Not very efficient, BigO --> on grand scheme of things O(n^2). SELECTION SORT IS ONLY BETTER THAN BUBBLE SORT if for some reason we wish to minize the no of swaps we are making. In bubble sort we kept swapping till we got the largest value to the end of the array. Here in selection sort swapping only takes place after the smallest value as being determined at the end of each loop

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {   //i also serves as the pointer guard here and j does the comparisons to determine the smallest number in a loop to be selected
//     let minIndex = i;      //we begin by assuming the first element of the outer loop is the smallest digity
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (i !== minIndex) { //at the end of each loop, we've gotten the smallest element's index and then it is put in its appropriate position
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }
//   return arr;
// }
// console.log(selectionSort([-20, 19, -5, 44, 38, 5, 47, 15, -11]));

//INSERTION SORT --> we loop over the array starting from the 2nd (so we can have at least 1 value to compare to i.e arr[j]). Each value of the arrayarr[i] is then saved in a variable. Then the inner loop is used to compare that value with values before it and then logically inserted in the appropriate position that would sort the array left to right
//BigO --> At worst O(n^2). At best O(n) as IT IS THE MOST efficient of the three when the array data is almost sorted e.g [1, 3, 4, 2]). Because in insertion sort we keep one side of the data sorted (the left), it is efficient for when we wish to continously sort an array as new elements are added into it on the go
//BSI sort all have the space complexity of O(1)

// function insertionSort(arr) { 
//   for (let i = 1; i < arr.length; i++) { //i helps keep track of num to be inserted at it's appropriate position while j iterates over the sub array array to the left of i in search of where i should be inserted
//     let numToInsert = arr[i];
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] <= numToInsert) {
//         //if arr[j] is <= numToInsert then left of i is already soreted and we can simply insert num to the right of arr[j] (i.e insert num back into it's cur position i)
//         break;
//       } 
//       //else arr[j] is > the num to inserted, we shift arr[j] to the right in order to potentially insert num to it's left
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = numToInsert;
//   }
//   return arr;
// }
// console.log(insertionSort([8, 7, 5, 15, 3, 1]));

// function countSort (nums) { //time O(n) {2 passes}, space O(1) {count is always length 3}
//   const count = new Array(3).fill(0);
//   for (let num of nums) {
//     count[num]++
//   }
  
//   let i = 0;
//   while (i < count[0]) {
//     nums[i++] = 0;
//   }
//   while (i < count[0] + count[1]) {
//     nums[i++] = 1;
//   }
//   while (i < count[0] + count[1] + count[2]) {
//     nums[i++] = 2;
//   }
// };
// console.log(countSort([2,0,2,1,1,0]))
