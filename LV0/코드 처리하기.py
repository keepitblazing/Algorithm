def solution(mode):
    mode = 0
    answer = ""
    for i in range(len(code)):
        if code[i] == "1":
            if mode == 0:
                mode = 1
            else:
                mode = 0
        if code[i] != "1":
            if mode == 0 and i % 2 == 0:
                answer += code[i]
            elif mode == 1 and i % 2 != 0:
                answer += code[i]
    return answer if answer != "" else "EMPTY"