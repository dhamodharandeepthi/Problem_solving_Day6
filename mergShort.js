const arr = [5, 3, 8, 2, 1, 4];
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = arr.length >> 1;
  const left = [];
  const right = [];
  for (let i = 0; i < middle; i++) {
    left[i] = arr[i];
  }
  for (let i = middle; i < arr.length; i++) {
    right[i - middle] = arr[i];
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let resultIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result[resultIndex] = left[leftIndex];
      leftIndex++;
    } else {
      result[resultIndex] = right[rightIndex];
      rightIndex++;
    }
    resultIndex++;
  }

  while (leftIndex < left.length) {
    result[resultIndex] = left[leftIndex];
    leftIndex++;
    resultIndex++;
  }

  while (rightIndex < right.length) {
    result[resultIndex] = right[rightIndex];
    rightIndex++;
    resultIndex++;
  }

  return result;
}

// Example usage:

const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 8]
