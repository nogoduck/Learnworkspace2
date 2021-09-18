# 프로그래머스 "신규아이디 추천" 문제
import re

# id = "...!@BaT#*..y.abcdefghijklm223012345678=9=0--.."
# id = "...!@BaT#*..y.abcdefghijklm"
id = "a"

# Level1 
print(id)
id = id.lower()
print('level1 >>')
print(id)


# Level2
id = re.sub("[^a-z0-9-_.]", "", id)
# print(re.sub("[^a-A]", "", id))
print('level1 >>')
print(id)


# Level3
id = re.sub("\.{2,}", ".", id)
print('level3 >>')
print(id)

# Level4
id = re.sub("^\.|\.$", "", id)
print('level4 >>')
print(id)

# Level5
id = id if id else "a" 
print('level5 >>')
print(id)

# Level6
id = id[:15] if len(id) > 15 else id
id = re.sub("\.$", "", id)
print('level6 >>')
print(id)

# Level7
id =  id + "".join(id[-1] for _ in range(3 - len(id))) if len(id) < 3 else id
print('level7 >>')
print(id)
