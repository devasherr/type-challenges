def stringLength(s, acc):
    if not s: return len(acc)
    acc.append(s[0])
    return stringLength(s[1:], acc)

print(stringLength("kulala", [])) # 6
