func solution(ineq string, eq string, n int, m int) int {
    if eq == "!" {
        if ineq == "<" {
            return int(n < m)
        } else {
            return int(n > m)
        }
    } else {
        if ineq == "<" {
            return int(n <= m)
        } else {
            return int(n >= m)
        }
    }
}