/*
what is sorting?
 A process of rearranging data elements in an array or list in order to make it easier to search and retrieve.

 * Ascending order is a way of arranging items or numbers in increasing order. //firstElement<secondElement
 * Descending order is a way of arranging items or numbers in decreasing order.//firstElement>secondElement

*/

function bubbleSort(arr) {
  console.log("Before swap :::: ", arr);
  let counter = 0;
  let counter2 = 0;
  for (let i = 0; i < arr.length; i++) {
    counter++;
    for (let j = 0; j < arr.length - 1; j++) {
      counter2++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(
    "After swap :::: ",
    arr,
    "counter ::::",
    counter,
    "counter2 ::::",
    counter2
  );
}

bubbleSort([2, 3, 4, 1]);
bubbleSort([3, 1, 2, 4]);
bubbleSort([1, 2, 3, 4]);
bubbleSort([3, 4, 2, 1]);
/*
Before swap ::::  [ 2, 3, 4, 1 ]
After swap ::::  [ 1, 2, 3, 4 ] counter :::: 4 counter2 :::: 12
Before swap ::::  [ 3, 1, 2, 4 ]
After swap ::::  [ 1, 2, 3, 4 ] counter :::: 4 counter2 :::: 12
Before swap ::::  [ 1, 2, 3, 4 ]
After swap ::::  [ 1, 2, 3, 4 ] counter :::: 4 counter2 :::: 12
Before swap ::::  [ 3, 4, 2, 1 ]
After swap ::::  [ 1, 2, 3, 4 ] counter :::: 4 counter2 :::: 12
*/
