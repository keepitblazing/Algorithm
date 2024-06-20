
def solution(l, r):
    result = []
    for num in range(l, r + 1):
        strNum = str(num)
        if all(char == "0" or char == "5" for char in strNum):
            result.append(num)
    if len(result) == 0:
        return [-1]
    return result