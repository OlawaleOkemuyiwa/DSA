//BUBBLE SORT --> The largest number bubbles to the top (i.e placing the largest values in a sorted position at the end of the array)
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
//   let noSwaps = true; //for optimization we start noSwaps = true for a whole iteration and change it to false whenever there is indeed a swap, then the array is already sorted and there is no need to keep iterating again so we break out of the outer loop
//   for (let i = arr.length - 1; i > 0; i--) { //i outer loop serves as a pointer guard for where j should stop. j does the actual comparison starting from the first element to the last unsorted element, comparing and swapping when neccessary
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break; //this will run when arr[j] as being compared with all elements to the right [from start of j to end] in order to bubble the biggest number for that loop of i and no swap occurs i.e arr[j] is the smallest element and cannot swap with any as they're all larger therefore the array is already sorted. So we're done and no need for another round of checking and swapping.
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
//BSI sort all have the space complexity of O(n)

// function insertionSort(arr) {  //for better understanding its better to think the element to be sorted at instance is at the middle or end e.g value 3 from the array up.
//   for (let i = 1; i < arr.length; i++)
//     let currentVal = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
// console.log(insertionSort([8, 7, 5, 1, 3, 15]));
