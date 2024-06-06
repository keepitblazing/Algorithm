class Solution {

  public int[] solution(int[] numlist, int n) {
    Arrays.sort(
      numlist,
      (a, b) -> {
        int newA = Math.abs(a - n);
        int newB = Math.abs(b - n);
        if (newA == newB) {
          return a - b;
        }
        return newA - newB;
      }
    );
    return numlist;
  }
}
