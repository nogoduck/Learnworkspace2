# 자릿수의 합
import sys
# sys.stdin=open("input.txt", "r")

def digit_sum(n):
    sum = 0

    # case 2
    for v in str(n):
        sum += int(v)

    # case 1
    # while n > 0:
    #     sum += n % 10
    #     n //= 10
    #     print(sum, n)

    return sum  


n = int(input())
arr = list(map(int , input().split()))
max = -2147483648
# res = 0
for v in arr:
    t = digit_sum(v)
    if max < t:
        max = t
        res = v

print(res)
