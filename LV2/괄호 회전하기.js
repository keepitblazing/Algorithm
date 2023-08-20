// 문제 설명

// 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

// (), [], {} 는 모두 올바른 괄호 문자열입니다.
// 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
// 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
// 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  let count = 0;
  // 문자열을 한칸씩 회전시키면서 유효한 괄호인지 확인
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isValid = true;
    // 문자열의 길이만큼 회전
    for (let j = 0; j < s.length; j++) {
      const char = s[j];
      // 여는 괄호면 스택에 넣어주고
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        if (!stack.length) {
          isValid = false;
          break;
        }
        // 닫는 괄호면 스택에서 꺼내서 짝이 맞는지 확인
        const top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "}" && top !== "{") ||
          (char === "]" && top !== "[")
        ) {
          isValid = false;
          break;
        }
      }
    }
    if (stack.length === 0 && isValid) count++;
    s = s.slice(1) + s[0];
  }
  return count;
}
