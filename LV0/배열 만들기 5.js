function solution(intStrs, k, s, l) {
  let answer = [];
  for (let i = 0; i < intStrs.length; i++) {
    let splicedNum = Number(intStrs[i].slice(s, l + s));
    if (splicedNum > k) {
      answer.push(splicedNum);
    }
  }
  return answer;
}
