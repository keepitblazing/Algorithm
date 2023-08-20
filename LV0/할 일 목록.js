function solution(todo_list, finished) {
  return todo_list
    .map((v, i) => (!finished[i] ? v : ""))
    .filter((v) => v !== "");
}
