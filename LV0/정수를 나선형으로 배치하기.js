function solution(n) {
  // 1. n x n 배열을 만든다.
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  // 2. top, bottom, left, right를 정한다.
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  let num = 1;

  // 3. top, bottom, left, right가 만나지 않을 때까지 반복한다.
  while (top <= bottom && left <= right) {
    // 4. top부터 right까지 숫자를 채운다.
    for (let i = left; i <= right; i++) {
      arr[top][i] = num++;
    }
    // 5. right가 bottom보다 크면 bottom부터 right까지 숫자를 채운다.
    for (let i = top + 1; i <= bottom; i++) {
      arr[i][right] = num++;
    }
    // 6. top가 bottom보다 작으면 right부터 left까지 숫자를 채운다.
    if (top !== bottom) {
      for (let i = right - 1; i >= left; i--) {
        arr[bottom][i] = num++;
      }
    }
    // 7. left가 right보다 작으면 bottom부터 top까지 숫자를 채운다.
    if (left !== right) {
      for (let i = bottom - 1; i > top; i--) {
        arr[i][left] = num++;
      }
    }
    top++;
    bottom--;
    left++;
    right--;
  }

  return arr;
}
