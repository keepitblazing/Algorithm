class Solution {

  public int solution(int[] arr) {
    int x = 0;
    while (true) {
      int[] transformedArr = new int[arr.length];
      for (int i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 == 0) {
          transformedArr[i] = arr[i] / 2;
        } else if (arr[i] < 50 && arr[i] % 2 == 1) {
          transformedArr[i] = arr[i] * 2 + 1;
        } else {
          transformedArr[i] = arr[i];
        }
      }
      if (isSameArray(arr, transformedArr)) {
        return x;
      }
      arr = transformedArr;
      x++;
    }
  }

  private boolean isSameArray(int[] arr1, int[] arr2) {
    for (int i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }
}
