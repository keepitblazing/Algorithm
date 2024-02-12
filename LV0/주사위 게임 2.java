class Solution {

  public long solution(int a, int b, int c) {
    long answer = 0;
    long sum = a + b + c;
    long sumOfSquares = a * a + b * b + c * c;
    long sumOfCubes = a * a * a + b * b * b + c * c * c;

    if (a != b && b != c && a != c) {
      answer = sum;
    } else if (a == b && b == c) {
      answer = sum * sumOfSquares * sumOfCubes;
    } else {
      answer = sum * sumOfSquares;
    }
    return answer;
  }
}
