func solution(a int, b int) int {
    if a % 2 != 0 && b % 2 != 0 {
        return a * a + b * b
    } else if a % 2 == 0 && b % 2 != 0 || a % 2 != 0 && b % 2 == 0 {
        return 2 * (a + b)
    } else if a % 2 == 0 && b % 2 == 0 {
        return a - b
    }
    return 0
}

