t = int(input())
arr = []
while(t):
    arr.append(int(input()));
    t-=1

for i in arr:
    num = str(2**i)
    sum = 0
    for j in num:
        sum += int(j)
    print(sum)
