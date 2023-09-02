function solution(arr, k) {
  let set = new Set(arr);
  let newArr = [...set];
  if (k > newArr.length) {
    for (let i = newArr.length; i < k; i++) {
      newArr.push(-1);
    }
  } else if (newArr.length > k) {
    newArr = newArr.slice(0, k);
  }
  return newArr;
}
