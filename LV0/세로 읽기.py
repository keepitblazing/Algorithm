def solution(my_string, m, c):
    if c > m:
        return ""
    result = ""
    for i in range(0, len(my_string), m):
        if i + c <= len(my_string):
            result += my_string[i + c - 1]
    return result
