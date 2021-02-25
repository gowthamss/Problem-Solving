def is_anagram(s, t):
    new_s = list(map(str, s))
    new_t = list(map(str, t))
    new_s.sort()
    new_t.sort()
    print(new_s, new_t)
    if(new_s == new_t):
        return True
    else:
        return False


print(is_anagram('anagram', 'nagaram'))
