def solution(players, callings):
    for calling in callings:
        idx = players.index(calling)
        players[idx], players[idx-1] = players[idx-1], players[idx]
    return players