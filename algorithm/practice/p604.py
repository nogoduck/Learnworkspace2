# 합이 같은 부분집합

import sys
sys.stdin=open("input.txt", "r")

def dfs(idx, sum):
    global sumArr
    print(sum, sumArr - sum)
    if idx >= n:
        if sum == (sumArr - sum):
            print("YES")
            sys.exit(0)
    else:
        dfs(idx + 1, sum + arr[idx])
        dfs(idx + 1, sum)
  
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    sumArr = sum(arr)
    # print(n, arr, sumArr)
    dfs(0, 0)