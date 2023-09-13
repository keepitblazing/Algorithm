function solution(babbling) {
  const announcement = ["aya", "ye", "woo", "ma"];

  return babbling.filter((word) => {
    let modifiedWord = word;

    announcement.forEach((substring) => {
      modifiedWord = modifiedWord.replace(new RegExp(substring, "gi"), "X");
    });

    modifiedWord = modifiedWord.replace(/X/gi, "");

    return modifiedWord.length === 0;
  }).length;
}
