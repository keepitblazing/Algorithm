func solution(a int, b int) string {
	day := []string{"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"}
	month := []int{31,29,31,30,31,30,31,31,30,31,30,31}
	sum := 0
	for i:=0; i<a-1; i++ {
		sum += month[i]
	}
	sum += b-1
	if sum >= 0 {
		return day[sum%7]
	}
	return ""
}