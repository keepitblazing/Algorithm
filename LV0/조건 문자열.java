class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        int answer = 0;
        if(eq.equals("=")){
            return (ineq.equals(">") && n >= m) || (ineq.equals("<") && m >= n) ? 1 : 0;
        } else if (eq.equals("!")){
            return (ineq.equals("<") && n <= m) || (ineq.equals(">") && m <= n) ? 1 : 0;
        }
        return answer;
    }
}