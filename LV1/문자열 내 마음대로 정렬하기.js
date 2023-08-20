function solution(strings, n) {
  return strings.sort(
    //sort 함수를 통해 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
    (
      a,
      b //-a의 n번째와 b의 n번째를 비교하여 오름차순 정렬
    ) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
    //a의 n번째 글자와 b의 n번째 글자가 같은 경우, 사전순으로 앞선 문자열이 앞쪽에 위치하므로 a와 b를 비교
  );
}
