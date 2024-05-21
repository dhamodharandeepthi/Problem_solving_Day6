function selectionShort(arr) {
  console.log("Before swap :::: ", ...arr);
  for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;
    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1] < arr[minInd]) {
        minInd = ind1;
      }
    }
    if (minInd != ind) {
      arr[minInd] ^= arr[ind];
      arr[ind] ^= arr[minInd];
      arr[minInd] ^= arr[ind];
    }
  }
  console.log("After swap :::: ", ...arr);
}

// selectionShort([1, 3, 4, 2]);
selectionShort([4, 3, 2, 1]);

/*
Before swap ::::  1 3 4 2
After swap ::::  1 2 3 4
Before swap ::::  4 3 2 1
After swap ::::  1 2 3 4
*/
