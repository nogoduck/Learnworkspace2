#1012 유기농배추
from collections import deque
#보통 X축을 처음 입력 값으로 받는데 이 문제는 가로(Y축)를 먼저 입력받아 문제를 푸는데 다소 헷갈릴 수 있다.

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def printArr(Map):
    for i in Map:
        print(*i, " ")

def bfs(a, b):
    # print("bfs 시작...")
    q = deque()
    farm[a][b] = 0
    q.append([a, b])

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and farm[nx][ny] == 1:
                farm[nx][ny] = 0
                q.append([nx, ny])


T =  int(input())
for _ in range(T):
    M, N, K = map(int, input().split())
    farm = [[0 for _ in range(M)] for _ in range(N)]
    # print("Farm 초기화")
    # printArr(farm)
    for _ in range(K):
        x, y = map(int, input().split())
        # print("T or F", 0 <= x < N and 0 <= y < M)
        if 0 <= x < M and 0 <= y < N:
            farm[y][x] = 1
       
    # print("Farm 입력 결과 >> ")
    # printArr(farm)
    # print("Farm 입력 섹션 종료")

    cnt = 0
    # print("Farm 탐색 시작")
    for i in range(N):
        for j in range(M):
            if farm[i][j] == 1:
                # print("1 발견, 전달 좌표 >>", i, j)
                bfs(i, j)
                cnt += 1
                # print("Farm 탐색 후")
                # printArr(farm)

  

    print(cnt)
    # print("cnt >> ",cnt)
    # printArr(farm)