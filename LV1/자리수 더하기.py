def solution(n):
    splitedN = list(str(n))
    answer = 0
    for i in range(len(splitedN)):
        answer += int(splitedN[i])
    return answer