# 뒤집은 소수

import sys
sys.stdin=open("input.txt", "r")

n = int(input())
arr  = list(map(int, input().split()))
print(n, arr)

def isPrime(x):
    x = int(x)
    
    cnt = 2
    for i in range(1, x + 1):
        if not x % i:
            cnt -= 1
    

    # cnt가 0이면 소수라는 의미로 True를 반환한다. 
    return  not cnt if True else False 
    
    
def reverse(x):

    # 뒤집기전 0 제거
    if not x % 10:
        while not x % 10:
            x //= 10
    
    tmp = []
    while x > 0:
        tmp.append(str(x % 10))
        x //= 10


    # join은 int형은 적용되지 않는다.
    tmp = "".join(tmp)
    return tmp

for v in arr:
    reversed = reverse(v)

    print(isPrime(reversed))
    if isPrime(reversed):
        print(reversed)







    