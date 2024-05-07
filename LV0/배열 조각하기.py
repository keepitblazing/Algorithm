def solution(arr, query):
    result = arr
    for i in range(len(query)):
        if i == 0 or i % 2 == 0:
            result = result[:query[i] + 1]
        else:
            result = result[query[i]:]
    return result
