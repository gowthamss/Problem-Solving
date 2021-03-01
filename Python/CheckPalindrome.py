# Check whether given string is palindrome or not
s = input()


def checkPalindrome(s):
    strr = ''
    for i in range(len(s) - 1, -1, -1):
        strr += s[i]
    if s == strr:
        return 'yes'
    else:
        return 'no'


print(checkPalindrome(s))
