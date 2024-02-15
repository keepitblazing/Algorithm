class Solution {

  public String solution(String[] cards1, String[] cards2, String goal) {
    int index = 0;
    int index2 = 0;
    for (char word : goal.toCharArray()) {
      if (cards1[index].charAt(0) == word) index++; else if (
        cards2[index2].charAt(0) == word
      ) index2++; else return "No";
    }
    return "Yes";
  }
}
