def solution(arr):
    answer = []
    if (len(arr)==0) or (10 in arr and len(arr) ==1):
        answer.append(-1) 
    else:
        arr.remove(min(arr))
        answer = arr
    return answer
