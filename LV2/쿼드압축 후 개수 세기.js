function solution(arr) {
  // 0,0으로 초기화
  const answer = [0, 0];

  function compress(x, y, size) {
    // x, y, size는 압축할 영역의 시작점과 크기
    let firstValue = arr[x][y];
    // 압축할 영역의 모든 값이 같은지 확인
    let isAllSame = true;
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        // 만약 압축할 영역의 모든 값이 같지 않다면, isAllSame을 false로 바꾸고 break
        if (arr[i][j] !== firstValue) {
          isAllSame = false;
          break;
        }
      }
      if (!isAllSame) break;
    }

    if (isAllSame) {
      // 만약 압축할 영역의 모든 값이 같다면, answer에 해당 값의 개수를 1 증가
      answer[firstValue]++;
    } else {
      // 만약 압축할 영역의 모든 값이 같지 않다면, 4등분하여 재귀 호출
      let newSize = size / 2;
      // 왼쪽 상단 검사
      compress(x, y, newSize);
      // 오른쪽 상단 검사
      compress(x, y + newSize, newSize);
      // 왼쪽 하단 검사
      compress(x + newSize, y, newSize);
      // 오른쪽 하단 검사
      compress(x + newSize, y + newSize, newSize);
    }
  }

  compress(0, 0, arr.length);
  return answer;
}
