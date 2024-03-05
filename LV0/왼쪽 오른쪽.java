class Solution {

  public String[] solution(String[] str_list) {
    int firstL = -1;
    int firstR = -1;
    for (int i = 0; i < str_list.length; i++) {
      if (str_list[i].equals("l")) {
        firstL = i;
        break;
      }
    }
    for (int i = 0; i < str_list.length; i++) {
      if (str_list[i].equals("r")) {
        firstR = i;
        break;
      }
    }
    if (firstL == -1 && firstR == -1) {
      return new String[0];
    } else if (firstR == -1 || (firstL != -1 && firstL < firstR)) {
      String[] result = new String[firstL];
      for (int i = 0; i < firstL; i++) {
        result[i] = str_list[i];
      }
      return result;
    } else {
      String[] result = new String[str_list.length - firstR - 1];
      for (int i = firstR + 1; i < str_list.length; i++) {
        result[i - firstR - 1] = str_list[i];
      }
      return result;
    }
  }
}
