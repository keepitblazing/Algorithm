function solution(board, moves) {
  let answer = 0;
  let bascket = [];

  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (bascket[bascket.length - 1] === board[j][now]) {
          bascket.pop();
          answer += 2;
        } else {
          bascket.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return answer;
}
