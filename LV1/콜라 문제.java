class Solution {

  public int solution(int a, int b, int n) {
    int coke = 0;
    while (n >= a) {
      coke += (n / a) * b;
      n = (n / a) * b + (n % a);
    }
    return coke;
  }
}
