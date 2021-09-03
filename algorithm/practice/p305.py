# 수의 합
import sys
# sys.stdin=open("input.txt", "r")

# n, m = map(int, input().split())
# arr = list(map(int, input().split()))

n = 8
m = 3
arr = [1, 2, 1, 3, 1, 1, 1, 2]

cnt = 0
lt = 0
rt = 0

# Case 1
# len(arr) 대신 n을 써도 무관
# while rt != len(arr) :
#     total = 0

#     if lt == rt:
#         total = arr[lt]
#     else:
#         for i in range(lt, rt + 1):
#             total += arr[i]
            

#     if total == m:
#         cnt += 1
#         lt += 1
#     elif total > m:
#         lt += 1
#     else:
#         rt += 1


# Case 2
# Case 1과 다르게 수열의 합계를 매번 합산하지 않고 누적해서 가져간다
rt = 1
tot = arr[0]

while True:
    if tot == m:
        cnt += 1
        tot -= arr[lt]
        lt += 1
    elif tot < m:
        if rt < n:
            tot += arr[rt]
            rt += 1
        else:
            break
    else:
        tot -= arr[lt]
        lt += 1
        


        

# Case 2와 동일
# while True:
#     if tot < m:
#         if  rt < n:
#             tot += arr[rt]
#             rt += 1
#         else:
#             break
#     elif tot == m:
#         cnt += 1
#         tot -= arr[lt]
#         lt += 1
#     else:
#         tot -= arr[lt]
#         lt += 1

print(cnt)
        