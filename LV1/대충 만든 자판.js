function solution(keymap, targets) {
  let pressCountMap = {};

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      let character = keymap[i][j];
      if (!pressCountMap[character] || pressCountMap[character] > j + 1) {
        pressCountMap[character] = j + 1;
      }
    }
  }

  let results = [];

  for (let target of targets) {
    let count = 0;
    let canType = true;

    for (let character of target) {
      if (!pressCountMap[character]) {
        results.push(-1);
        canType = false;
        break;
      }
      count += pressCountMap[character];
    }

    if (canType) results.push(count);
  }

  return results;
}
