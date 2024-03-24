function solution(myString, pat) {
  let newMyString = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      newMyString += "B";
    } else if (myString[i] === "B") {
      newMyString += "A";
    }
  }
  return newMyString.includes(pat) ? 1 : 0;
}
