#1012 유기농배추
from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
res = []

def printArr(Map):
    for i in Map:
        print(*i, " ")

def bfs(a, b):
    q = deque()
    farm[a][b] = 0
    q.append([a, b])

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and farm[nx][ny] == 1:
                q.append([nx, ny])


T =  int(input())
for _ in range(T):
    M, N, K = map(int, input().split())
    farm = [[0 for col in range(M)] for row in range(N)]
    printArr(farm)
    for _ in range(K):
        x, y = map(int, input().split())
        m = M - 1
        n = N - 1
        print("T or F",  0 <= x <= m and 0 <= y <= n)
        if 0 <= x <= n and 0 <= y <= m:
            farm[x][y] = 1
            printArr(farm)
       
    print("Farm 입력 섹션 종료")

    cnt = 0
    print("Farm 분석 시작")
    for i in range(n):
        for j in range(m):
            if farm[i][j] == 1:
                bfs(i, j)
                cnt += 1
                printArr(farm)
                print("1 발견!")




    print("cnt >> ",cnt)
    printArr(farm)