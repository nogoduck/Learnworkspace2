# 소수의 개수(에라토스테네스의 체)
# 입력예제1 : 1000 >> 168, 20 >> 8
import sys
# sys.stdin=open("input.txt", "r")

n = int(input())
arr = [True] * (n + 1)

# 0과 1은 소수가 아니기 때문에 미리 처리해준다
arr[0] = False
arr[1] = False

# 또는 아래와 같이 처리가능 
# arr = [False, False] + [True] * (n - 1)


cnt = 0
# Case 2 (루트를 사용하여 반복 범위 축소)
m = int(n ** 0.5)
for i in range(2, m + 1):
    if arr[i] == True:
        cnt+=1
        for j in range(i * 2, n + 1, i):
            arr[j] = False


# # Case 1
# for i in range(2, n + 1):
#     if arr[i] == True:
#         cnt+=1
#         for j in range(i * 2, n + 1, i):
#             print('j >> ', j)
#             arr[j] = False

print(arr.count(True))