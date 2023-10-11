function solution(park, routes) {
  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  let currentPosition = [0, 0];

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        currentPosition = [i, j];
      }
    }
  }

  for (let route of routes) {
    const [dir, distance] = route.split(" ");
    const directionMove = directions[dir];
    let canMove = true;

    let newPosition = [...currentPosition];
    for (let i = 0; i < parseInt(distance); i++) {
      const [currentRow, currentCol] = newPosition;
      const [rowMove, colMove] = directionMove;
      const [nextRow, nextCol] = [currentRow + rowMove, currentCol + colMove];

      if (
        nextRow < 0 ||
        nextRow >= park.length ||
        nextCol < 0 ||
        nextCol >= park[0].length ||
        park[nextRow][nextCol] === "X"
      ) {
        canMove = false;
        break;
      }

      newPosition = [nextRow, nextCol];
    }

    if (canMove) {
      currentPosition = newPosition;
    }
  }
  return currentPosition;
}
