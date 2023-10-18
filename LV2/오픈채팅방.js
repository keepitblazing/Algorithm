function solution(record) {
  let answer = [];
  const userList = {};

  for (const user of record) {
    const [action, id, name] = user.split(" ");
    switch (action) {
      case "Enter":
        userList[id] = name;
        answer.push(["님이 들어왔습니다.", id]);
        break;
      case "Leave":
        answer.push(["님이 나갔습니다.", id]);
        break;
      case "Change":
        userList[id] = name;
        break;
    }
  }
  answer = answer.map((v) => userList[v[1]] + v[0]);
  return answer;
}
