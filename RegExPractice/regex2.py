# 프로그래머스 "신규아이디 추천" 문제
import re

new_str = "...NewNewNew..., New...Content, sNew, aNew NewNew Newww 303013aBd2@dsd....."
# new_str = "...NewNewNew..., New...Content, sNew, aNew NewNew Newww 303013aBd2@dsd.....[]"
print(new_str)

# new_str = re.sub("\.{2,}", ".", new_str)
print(new_str)
# new_str = re.sub("^\.", "1", new_str)
# new_str = re.sub("^[.]", "1", new_str)
# new_str = re.sub("\.$", "3", new_str)
new_str = re.sub("^\.|\.$", "3", new_str)
# new_str = re.sub('^[.]|[.]$', 'X', new_str)
print(new_str)