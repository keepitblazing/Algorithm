function solution(keyinput, board) {
  let cooridnation = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left" && cooridnation[0] > -(board[0] - 1) / 2) {
      cooridnation[0]--;
    } else if (
      keyinput[i] === "right" &&
      cooridnation[0] < (board[0] - 1) / 2
    ) {
      cooridnation[0]++;
    }

    if (keyinput[i] === "up" && cooridnation[1] < (board[1] - 1) / 2) {
      cooridnation[1]++;
    } else if (
      keyinput[i] === "down" &&
      cooridnation[1] > -(board[1] - 1) / 2
    ) {
      cooridnation[1]--;
    }
  }
  return cooridnation;
}
