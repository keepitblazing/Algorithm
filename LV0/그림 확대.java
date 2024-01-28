import java.util.*;

class Solution {

  public String[] solution(String[] names) {
    ArrayList<String> answer = new ArrayList<>();
    int count = 0;
    for (int i = 0; i < names.length; i++) {
      count++;
      if (count == 1) {
        answer.add(names[i]);
      }
      if (count == 5) {
        count = 0;
      }
    }
    return answer.toArray(new String[0]);
  }
}
