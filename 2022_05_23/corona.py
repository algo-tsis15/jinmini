from collections import deque

def solution(places):
    dirs = [(0,1), (0,-1), (1,0), (-1,0)]
    def get_distance(p1, p2):
        return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])


    def check(p1):
        y, x = p1[0], p1[1]
        nonlocal place
        queue = deque()
        visited = set()
        queue.append((y, x))
        while queue:
            ty, tx = queue.popleft()
            visited.add((ty, tx))
            for dy, dx in dirs:
                ny, nx = ty + dy, tx + dx
                # 거리가 2보다 작은 경우
                if 0 <= ny < len(place) and 0 <= nx < len(place[0]) \
                        and get_distance((y, x), (ny, nx)) <= 2 and (ny, nx) not in visited:
                    visited.add((ny, nx))
                    if place[ny][nx] == "O":
                        queue.append((ny, nx))
                    elif place[ny][nx] == "P":
                        return False

        return True

    answer = []
    # 사람들의 현재 위치 기록.
    for place in places:
        position = set()
        for y in range(len(place)):
            for x in range(len(place[0])):
                if place[y][x] == "P":
                    position.add((y, x))
        for p in position:
            if check(p) is False:
                answer.append(0)
                break
        else:
            answer.append(1)


    return answer
