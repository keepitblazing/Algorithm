function solution(n) {
  let answer = 0;
  let a = 1;
  // n을 2진수로 변환 후 1의 개수를 구함
  let newA = n.toString(2).split("");
  let newALeng = newA.filter((a) => a === "1").length;
  while (true) {
    // n + a를 2진수로 변환 후 1의 개수를 구함
    let newB = (n + a).toString(2).split("");
    let newBLeng = newB.filter((b) => b === "1").length;
    // newALeng과 newBLeng이 같으면 answer에 n + a를 할당하고 break
    if (newALeng === newBLeng) {
      answer = n + a;
      break;
    }
    // newALeng과 newBLeng이 다르면 a값 증가
    a++;
  }

  return answer;
}
