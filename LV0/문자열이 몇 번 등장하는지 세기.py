def solution(myString, pat):
    answer = 0

    for i in range(len(myString) - len(pat) + 1):
        substring = myString[i:i + len(pat)]
        if substring == pat:
            answer += 1

    return answer
