function solution(scoville, K) {
  let answer = 0;

  function heapify(arr, index, length) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < length && arr[left] < arr[smallest]) {
      smallest = left;
    }

    if (right < length && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
      heapify(arr, smallest, length);
    }
  }

  function extractMin(arr) {
    let min = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    heapify(arr, 0, arr.length);
    return min;
  }

  function insert(arr, value) {
    arr.push(value);
    let index = arr.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && arr[parent] > arr[index]) {
      [arr[parent], arr[index]] = [arr[index], arr[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  for (let i = Math.floor(scoville.length / 2) - 1; i >= 0; i--) {
    heapify(scoville, i, scoville.length);
  }

  while (scoville[0] < K) {
    if (scoville.length < 2) return -1;

    let first = extractMin(scoville);
    let second = extractMin(scoville);
    let newScoville = first + second * 2;

    insert(scoville, newScoville);
    answer++;
  }

  return answer;
}
