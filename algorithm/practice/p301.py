# 회문 문자열 검사

import sys
sys.stdin=open("input.txt", "r")

n = int(input())


# Case 2
for i in range(n):
    s = input().lower()
    if s == s[::-1]:
        print("#%d YES" %(i + 1))
    else:
        print("#%d NO" %(i + 1))
        
        
    

# Case 1
# for i in range(n):
#     s = input().lower()

#     for j in range(len(s) // 2):
#         if s[j] != s[-1 -j]:
#             print("#%d NO" %(i + 1))
#             break
#     else:
#         print("#%d YES" %(i + 1))
                    