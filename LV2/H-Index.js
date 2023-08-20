function solution(citations) {
  // citations 배열을 오름차순으로 정렬
  let a = citations.sort((a, b) => a - b);
  let answer = 0;
  // a 배열을 순회하면서 h번 이상 인용된 논문이 h편 이상인지 확인
  for (let i = 0; i < a.length; i++) {
    // h번 이상 인용된 논문이 h편 이상이면 answer에 h를 저장하고 반복문을 종료
    let h = a.length - i;
    if (h <= a[i]) {
      answer = h;
      break;
    }
  }
  return answer;
}
