function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } else {
    return arr1.reduce((acc, cur) => acc + cur) >
      arr2.reduce((acc, cur) => acc + cur)
      ? 1
      : arr2.reduce((acc, cur) => acc + cur) >
        arr1.reduce((acc, cur) => acc + cur)
      ? -1
      : 0;
  }
}
