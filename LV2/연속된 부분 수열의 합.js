function solution(sequence, k) {
  let n = sequence.length;
  let start = 0,
    end = 0;
  let currentSum = sequence[0];
  let minLength = Infinity;
  let result = [0, 0];

  while (end < n) {
    if (currentSum === k) {
      if (end - start < minLength) {
        minLength = end - start;
        result = [start, end];
      }
      currentSum -= sequence[start];
      start++;
    } else if (currentSum < k) {
      end++;
      if (end < n) {
        currentSum += sequence[end];
      }
    } else {
      currentSum -= sequence[start];
      start++;
    }
  }

  return result;
}
