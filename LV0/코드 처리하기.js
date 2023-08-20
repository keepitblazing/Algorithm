function solution(code) {
  let mode = 0;
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      if (mode === 0) {
        mode = 1;
      } else {
        mode = 0;
      }
    }
    if (code[i] !== "1") {
      if (mode === 0 && i % 2 === 0) {
        answer += code[i];
      } else if (mode === 1 && i % 2 !== 0) {
        answer += code[i];
      }
    }
  }
  return answer === "" ? "EMPTY" : answer;
}
