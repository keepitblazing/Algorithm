def solution(a, b):
    newA = int(str(a) + str(b));
    newB = int(str(b) + str(a));
    if newA > newB:
        return newA
    else:
        return newB