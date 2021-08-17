export default function quickSort(numArr, start, end) {
  if (start >= end) {
    return;
  }
  let pivot = start;
  let left = start + 1;
  let right = end;
  while (left <= right) {
    while (left <= end && numArr[left] <= numArr[pivot]) {
      left += 1;
    }
    while (right > start && numArr[right] >= numArr[pivot]) {
      right -= 1;
    }
    if (left > right) {
      [numArr[right], numArr[pivot]] = [numArr[pivot], numArr[right]];
    } else {
      [numArr[left], numArr[right]] = [numArr[right], numArr[left]];
    }
  }
  quickSort(numArr, start, right - 1);
  quickSort(numArr, right + 1, end);
}
