function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Selecting a pivot element
  const pivotIndex = getRandomIndex(arr.length);
  const pivot = arr[pivotIndex];

  // Partitioning the array
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      if (arr[i] < pivot) {
        left[left.length] = arr[i];
      } else {
        right[right.length] = arr[i];
      }
    }
  }

  // Recursively sorting the left and right subarrays
  left = quickSort(left);
  right = quickSort(right);

  // Combining the sorted subarrays with the pivot
  let result = [];
  result.length = left.length + right.length + 1;
  let resultIndex = 0;
  for (let i = 0; i < left.length; i++) {
    result[resultIndex] = left[i];
    resultIndex++;
  }
  result[resultIndex] = pivot;
  resultIndex++;
  for (let i = 0; i < right.length; i++) {
    result[resultIndex] = right[i];
    resultIndex++;
  }

  return result;
}

function getRandomIndex(max) {
  return new Date().getTime() % max;
}

// Example usage:
const arr = [5, 3, 8, 2, 1, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 8]
