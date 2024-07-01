def solution(my_string, indices):
    sortedIndices = sorted(indices)
    return "".join([v for i, v in enumerate(my_string) if i not in sortedIndices])