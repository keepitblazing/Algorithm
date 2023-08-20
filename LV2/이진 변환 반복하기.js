function solution(s) {
  let loop = 0;
  let count = 0;
  // s가 1이 될 때까지 반복
  while (s !== "1") {
    let zeroCount = 0;
    let temp = "";
    // s에서 0을 제거
    for (let i = 0; i < s.length; i++) {
      // 0의 개수를 세고, 0을 제거한 나머지를 temp에 저장
      if (s[i] === "0") {
        zeroCount++;
        // 0을 제거한 나머지를 temp에 저장
      } else {
        temp += s[i];
      }
    }
    count += zeroCount;
    // temp의 길이를 이진법으로 변환 temp의 길이는 1에 개수이기 때문
    s = temp.length.toString(2);
    loop++;
  }
  return [loop, count];
}
