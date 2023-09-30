function solution(babbling) {
  let answer = 0;
  let arr = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let currentWord = babbling[i];

    for (let j = 0; j < arr.length; j++) {
      if (currentWord.includes(arr[j].repeat(2))) {
        break;
      }
      currentWord = currentWord.split(arr[j]).join(" ");
    }

    if (currentWord.split(" ").join("").length === 0) {
      answer++;
    }
  }

  return answer;
}
