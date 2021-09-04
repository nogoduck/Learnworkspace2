# 격자판 회문수
import sys
# sys.stdin=open("input.txt", "r")

arr = [list(map(int, input().split())) for _ in range(7)]
n = len(arr)
cnt = 0 

for i in range(n):
    for j in range(n):

        if 0 <= (i - 2) < n and 0 <= (i + 2) < n:
            # print(arr[i - 2][j] , arr[i - 1][j] , arr[i][j] , arr[i + 1][j] , arr[i + 2][j])
            if arr[i - 1][j] == arr[i + 1][j] and arr[i - 2][j] == arr[i + 2][j]:
                cnt += 1
            # colNum =  arr[i - 2][j] + arr[i - 1][j] + arr[i][j] + arr[i + 1][j] + arr[i + 2][j]
        if 0 <= (j - 2) < n and 0 <= (j + 2) < n:
            # print(arr[i][j-2], arr[i][j-1], arr[i][j], arr[i][j+1], arr[i][j+2])
            if arr[i][j - 1] == arr[i][j + 1] and arr[i][j - 2] == arr[i][j + 2]:
                cnt += 1
            # rowNum =  arr[i][j - 2] + arr[i][j - 1] + arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
print(cnt)