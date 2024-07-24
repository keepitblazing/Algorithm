function solution(n) {
  let graph = [];
  let answer = [];
  let y = -1; // 초기 행 위치
  let x = 0; // 초기 열 위치
  let number = 1; // 채울 숫자

  // 요소가 모두 0인 n개의 삼각형 배열 생성
  for (let i = 1; i <= n; i++) {
    graph.push(Array(i).fill(0));
  }

  // 달팽이 채우기
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        y += 1; // 아래로 이동
      } else if (i % 3 === 1) {
        x += 1; // 오른쪽으로 이동
      } else {
        y -= 1; // 대각선 위로 이동
        x -= 1;
      }
      graph[y][x] = number; // 숫자 채우기
      number += 1; // 다음 숫자
    }
  }

  // 결과 배열로 변환
  for (let row of graph) {
    answer = answer.concat(row);
  }

  return answer;
}
