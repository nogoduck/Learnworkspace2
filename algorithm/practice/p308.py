# 곳감
import sys
# sys.stdin=open("input.txt", "r")

def printArr(arr):
    for i in arr:
        print(*i)


n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
m = int(input())
# c[0]: 행 번호, c[1]: 0(왼쪽) or 1(오른쪽), c[2]: 횟수

# printArr(arr)
# print()

for _ in range(m):
    c = list(map(int, input().split()))
    if not c[1]:
        # 왼쪽
        for _ in range(c[2]):
            # tmp = arr[c[0] - 1].pop(0)
            # arr[c[0] - 1].append(tmp)
            # or
            arr[c[0] - 1].append(arr[c[0] - 1].pop(0))
    else:
        # 오른쪽
        for _ in range(c[2]):
            # tmp = arr[c[0] - 1].pop()
            # arr[c[0] - 1].insert(0, tmp)
            # or
            arr[c[0] - 1].insert(0, arr[c[0] - 1].pop())

# printArr(arr)
# print()

lt = 0
rt = n
res = 0
for i in range(n):
    for j in range(lt, rt):
        res += arr[i][j]
        arr[i][j] = "X"

    if i < n // 2:
        lt += 1
        rt -= 1
    else:
        lt -= 1
        rt += 1

# printArr(arr)
print(res)