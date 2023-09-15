//달리기 경주

function solution(players, callings) {
  let playersIndex = {};

  players.forEach((name, index) => {
    playersIndex[name] = index;
  });

  for (let i = 0; i < callings.length; i++) {
    let idx = playersIndex[callings[i]];
    let chang = players[idx - 1];

    [players[index], players[index - 1]] = [players[index - 1], players[index]];

    playersindex[callings[i]] = index - 1;
    playersindex[chang] = index;
  }

  return players;
}
