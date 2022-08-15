function solution(s) {
    let a = s.split(" ");
    let answer = "";
  
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (j % 2 !== 0) {
          answer = answer + a[i][j].toLowerCase();
        } else {
          answer = answer + a[i][j].toUpperCase();
        }
      }
      if (i < a.length - 1) {
        answer = answer + " ";
      }
    }
    return answer;
  }
  