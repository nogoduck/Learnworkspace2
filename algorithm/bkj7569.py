#7569 토마토
from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def printMap(Map):
    for i in Map:
        print(*i, " ")

# 맵에 0이 존재하면 True값 반환
def checkNull():
    for i in range(0, len(arr)):
        for j in range(0, len(arr[i])):
            if arr[i][j] == 0:
                return True


def enableIndex():
    for i in range(0, len(arr)):
        for j in range(0, len(arr[i])):
            if arr[i][j] == 1:
                enableList.append([i, j])
         

def bfs(a, b):
    q = deque()
    q.append([a, b])
    checkArr[a][b] =  1

    print("checkMap >> ")
    printMap(checkArr)

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and checkArr[nx][ny] == 0:
                
                checkArr[nx][ny] = 1
                q.append([nx, ny])


# 0, -1, 1 
M, N, H =  map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N * H)]
checkArr = [[0 for _ in range(N)] for _ in range(N * H)]


# 최초 입력시 배열에 0이 존재하지 않으면 아래 로직을 수행하지 않고 바로 종료
if checkNull():
    
    else:

        enableList = []
        enableIndex()
        print('enableList >> ', enableList)

        printMap(arr)