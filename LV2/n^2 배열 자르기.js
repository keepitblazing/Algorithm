// 문제 설명

// 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
// 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

// 실패 코드
function solution(n, left, right) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      matrix[j][i] = i + 1;
      matrix[i][j] = i + 1;
    }
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr = arr.concat(matrix[i]);
  }
  return arr.slice(left, right + 1);
}

function solution(n, left, right) {
  let result = [];
  // 1. 2차원 배열을 만든다.
  for (let i = left; i <= right; i++) {
    // 2. 2차원 배열의 행과 열을 구한다.
    let row = Math.floor(i / n);
    let col = i % n;
    // 3. 행과 열 중 큰 값을 구한다.
    let value = Math.max(row, col) + 1;
    // 4. 결과 배열에 값을 넣는다.
    result.push(value);
  }

  return result;
}
