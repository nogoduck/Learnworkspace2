#7569 토마토
from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def printMap(Map):
    for i in Map:
        print(*i, " ")

# 방문을 체크하는 배열 초기화
def setCheckArr():
    checkArr = [[0 for _ in range(N)] for _ in range(N * H)]

# 배열에 0이 존재하면 True값 반환
def checkNull():
    for i in range(0, len(arr)):
        for j in range(0, len(arr[i])):
            if arr[i][j] == 0:
                return True

# 배열안에 1의 좌표값을 탐색 후 리스트에 삽입 
def enableIndex():
    for i in range(0, len(arr)):
        for j in range(0, len(arr[i])):
            if arr[i][j] == 1:
                enableList.append([i, j])
         
# BFS 탐색
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

M, N, H =  map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N * H)]
checkArr = [[0 for _ in range(N)] for _ in range(N * H)]

# 최초 입력시 배열에 0이 존재하면 로직을 수행하고
# 존재하지 않을 시 0을 출력하고 종료한다.
if checkNull():
    # 토마토가 존재하는 좌표 삽입
    enableList = []
    enableIndex()
    print('enableList >> ', enableList)

    if enableList:
        for i in range(0, len(enableList)):

            print(i)
            # bfs(enableList[i])
            


else:
    print(0)