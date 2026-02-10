def perm(arr):
    if not arr: return [[]]

    res = []
    for i in range(len(arr)):
        for p in perm(arr[:i]+arr[i+1:]):
            res.append([arr[i]]+ p)
    return res

print(perm([1, 2, 3]))
