function pushSorted(arr, value) {
  for (let ind = arr.length - 1; ind >= 0; ind--) {
    if (arr[ind] > value) {
      arr[ind + 1] = arr[ind];
    } else {
      arr[ind + 1] = value;
      return arr;
    }
  }
  arr[0] = value;
  return arr;
}
let arr = [1, 3, 4];
// console.log(pushSorted(arr, 3)); //[ 3 ]
// console.log(pushSorted(arr, 2)); //[ 2, 3 ]
// console.log(pushSorted(arr, 1)); //[ 1, 2, 3 ]
console.log(pushSorted(arr, 2)); //[ 1, 3, 4 ]
// console.log(pushSorted(arr, 5)); //[ 1, 2, 3, 4, 5 ]
// console.log(pushSorted(arr, 8)); //[ 1, 2, 3, 4, 5, 8 ]
// console.log(pushSorted(arr, 6)); //[1, 2, 3, 4, 5, 6, 8]
// console.log(pushSorted(arr, 0)); //[0, 1, 2, 3, 4, 5, 6, 8]
