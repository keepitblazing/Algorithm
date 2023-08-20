function solution(name, yearning, photo) {
  let memoryScores = [];
  let yearningObj = {};
  for (let i = 0; i < name.length; i++) {
    yearningObj[name[i]] = yearning[i];
  }
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (yearningObj[photo[i][j]] !== undefined) {
        score += yearningObj[photo[i][j]];
      }
    }
    memoryScores.push(score);
  }
  return memoryScores;
}
