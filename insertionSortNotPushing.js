function insertionSort(arr) {
  console.log("Before ::::", ...arr);
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let stored = false;
    for (let ind = i - 1; ind >= 0; ind--) {
      if (value < arr[ind]) {
        arr[ind + 1] = arr[ind];
      } else {
        arr[ind + 1] = value;
        stored = true;
        break;
      }
    }
    if (!stored) arr[0] = value;
    console.log("After ::::", ...arr, "iteration :::", i, ":::::", ...arr);
  }
}
insertionSort([2, 5, 1, 4, 3]);
/*
Before :::: 2 5 1 4 3
After :::: 2 5 1 4 3 iteration ::: 1 ::::: 2 5 1 4 3
After :::: 1 2 5 4 3 iteration ::: 2 ::::: 1 2 5 4 3
After :::: 1 2 4 5 3 iteration ::: 3 ::::: 1 2 4 5 3
After :::: 1 2 3 4 5 iteration ::: 4 ::::: 1 2 3 4 5
*/

insertionSort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)));
/*
Before :::: 26 43 96 55 61
After :::: 26 43 96 55 61 iteration ::: 1 ::::: 26 43 96 55 61
After :::: 26 43 96 55 61 iteration ::: 2 ::::: 26 43 96 55 61
After :::: 26 43 55 96 61 iteration ::: 3 ::::: 26 43 55 96 61
After :::: 26 43 55 61 96 iteration ::: 4 ::::: 26 43 55 61 96
*/
