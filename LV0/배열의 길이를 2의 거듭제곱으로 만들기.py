def solution(arr):
    targetLength = 1
    while targetLength < len(arr):
        targetLength *= 2
    while len(arr) < targetLength:
        arr.append(0)
    return arr

