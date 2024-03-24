class Solution {

  public int solution(String myString, String pat) {
    String newMyString = "";
    for (int i = 0; i < myString.length(); i++) {
      if (myString.charAt(i) == 'A') {
        newMyString += 'B';
      } else if (myString.charAt(i) == 'B') {
        newMyString += 'A';
      }
    }
    return newMyString.contains(pat) ? 1 : 0;
  }
}
