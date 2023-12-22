func solution(left int, right int) int {
	var answer int
	for i := left; i <= right; i++ {
		var count int
		for j := 1; j <= i; j++ {
			if i % j == 0 {
				count++
			}
		}
		if count % 2 == 0 {
			answer += i
		} else {
			answer -= i
		}
	}
	return answer
}