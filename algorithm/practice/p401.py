# 이분 검색
import sys
# sys.stdin=open("input.txt", "r")

n, t = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

# 이분검색
lt = 0
rt = n
while True:

    mid = (lt + rt) // 2
    if arr[mid] == t:
        print(mid + 1)
        break
    elif arr[mid] > t:
        rt = mid
    else:
        lt = mid


# 완전탐색
# for i in range(n):
#     if t == arr[i]:
#         print(i + 1)

