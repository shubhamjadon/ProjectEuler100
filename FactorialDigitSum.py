testCase = int(input())
while(testCase):
    num = int(input())
    fact = 1
    sum = 0
    while(num>1):
        fact *= num
        num -= 1
    fact = str(fact)
    for i in fact:
        sum += int(i)
    print(sum)
    testCase-=1