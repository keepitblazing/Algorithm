function solution(s) {
  const numberWords = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const [word, number] of Object.entries(numberWords)) {
    s = s.replace(new RegExp(word, "g"), number);
  }

  return Number(s);
}
