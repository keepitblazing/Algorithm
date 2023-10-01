function solution(skill, skill_trees) {
  let count = 0;

  for (let tree of skill_trees) {
    let filteredTree = tree
      .split("")
      .filter((s) => skill.includes(s))
      .join("");

    if (skill.startsWith(filteredTree)) {
      count++;
    }
  }

  return count;
}
