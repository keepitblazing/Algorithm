function solution(rank, attendance) {
  const concat = rank
    .map((rank, index) => {
      return {
        rank: rank,
        attendance: attendance[index],
      };
    })
    .sort((a, b) => a.rank - b.rank)
    .filter((v) => v.attendance !== false)
    .slice(0, 3)
    .map((v) => rank.indexOf(v.rank));
  return 10000 * concat[0] + 100 * concat[1] + concat[2];
}
