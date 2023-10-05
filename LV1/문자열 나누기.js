function solution(s) {
  let count = 0;
  let index = 0;

  while (index < s.length) {
    let firstChar = s[index];
    let firstCharCount = 1;
    let otherCharCount = 0;
    index++;

    while (index < s.length) {
      if (s[index] === firstChar) {
        firstCharCount++;
      } else {
        otherCharCount++;
      }

      if (firstCharCount === otherCharCount) {
        count++;
        index++;
        break;
      }

      index++;
    }
    if (firstCharCount !== otherCharCount) {
      count++;
    }
  }

  return count;
}
