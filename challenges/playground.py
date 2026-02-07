def cap(s):
    if s == "": return ""
    return s[0].upper() + cap(s[1:])

print(cap("hello"))
