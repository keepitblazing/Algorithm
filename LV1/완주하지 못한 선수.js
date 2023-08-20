function solution(participant, completion) {
  let lastMan = "";

  let a = completion.sort();
  let b = participant.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return (lastMan = participant[i]);
    }
  }

  return answer;
}
