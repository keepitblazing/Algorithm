function solution(s, skip, index) {
  let lowercaseAlphabet = [];
  for (
    let char = "a";
    char <= "z";
    char = String.fromCharCode(char.charCodeAt(0) + 1)
  ) {
    lowercaseAlphabet.push(char);
  }

  let skipSet = new Set([...skip]);
  let changed = "";

  for (let i = 0; i < s.length; i++) {
    let currentIndex = lowercaseAlphabet.indexOf(s[i]);
    let movedIndex = currentIndex;

    let skipCounter = 0;
    while (skipCounter < index) {
      movedIndex++;
      if (movedIndex > 25) movedIndex = 0;
      if (!skipSet.has(lowercaseAlphabet[movedIndex])) skipCounter++;
    }
    changed += lowercaseAlphabet[movedIndex];
  }

  return changed;
}
