function solution(s) {
  let p = 0;
  let y = 0;
  let c = s.toUpperCase();
  let answer = "";

  for (let i = 0; i < c.length; i++) {
    if (c[i].indexOf("P") === 0) {
      p++;
    } else if (c[i].indexOf("Y") === 0) {
      y++;
    }
  }

  if (p === y) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
