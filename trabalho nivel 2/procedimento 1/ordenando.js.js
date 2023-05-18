function swap(array, pos1, pos2) {
  const temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

const shuffle = (array, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * array.length);
    const pos2 = Math.floor(Math.random() * array.length);
    swap(array, pos1, pos2);
  }
};
const bubble_sort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

const selection_sort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
};

const quick_sort = (array, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    const pivotIndex = partition(array, startIndex, endIndex);
    quick_sort(array, startIndex, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, endIndex);
  }
};

const partition = (array, startIndex, endIndex) => {
  const pivot = array[endIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] <= pivot) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, endIndex);
  return pivotIndex;
};
