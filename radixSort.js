// A utility function to get the maximum value in an array
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// A function to do counting sort of arr[] according to the digit represented by exp.
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    let digit = (arr[i] / exp) % 10 | 0; // Integer division to get the digit
    count[digit]++;
  }

  // Change count[i] so that count[i] now contains actual position of this digit in output[]
  let total = 0;
  for (let i = 0; i < 10; i++) {
    total += count[i];
    count[i] = total - count[i];
  }

  // Build the output array
  for (let i = 0; i < n; i++) {
    let digit = (arr[i] / exp) % 10 | 0; // Integer division to get the digit
    output[count[digit]] = arr[i];
    count[digit]++;
  }

  // Copy the output array to arr[], so that arr[] now contains sorted numbers according to the current digit
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// The main function to implement radix sort
function radixSort(arr) {
  const max = getMax(arr);

  // Do counting sort for every digit, starting from the least significant digit
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSort(arr, exp);
  }
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(arr);
console.log(arr); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
