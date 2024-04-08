class Solution {

  public int solution(String s) {
    int answer = 0;
    int count = 0;
    int index = 0;

    while (index < s.length()) {
      char firstChar = s.charAt(index);
      int firstCharCount = 1;
      int otherCharCount = 0;
      index++;

      while (index < s.length()) {
        if (s.charAt(index) == firstChar) {
          firstCharCount++;
        } else {
          otherCharCount++;
        }

        if (firstCharCount == otherCharCount) {
          count++;
          index++;
          break;
        }

        index++;
      }
      if (firstCharCount != otherCharCount) {
        count++;
      }
    }

    return count;
  }
}
