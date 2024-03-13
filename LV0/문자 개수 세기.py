def solution(my_string):
    answer = [0] * 52
    for i in my_string:
        code = ord(i)
        if 65 <= code <= 90:
            answer[code - 65] += 1
        elif 97 <= code <= 122:
            answer[code - 97 + 26] += 1
    return answer
