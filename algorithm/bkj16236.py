#16236 아기 상어
from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def printMap(Map):
    for i in Map:
        print(*i, " ")

def startIndex():
    for i in range(0, N):
        for j in range(0, N):
            if arr[i][j] == 9:
                return i, j
         


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



N =  int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
checkArr = [[0 for _ in range(N)] for _ in range(N)]
shark_size = 2
move_num = 0

sX, sY = startIndex()
print('sX, sY >> ', sX, sY)

bfs(sX, sY)




printMap(arr)