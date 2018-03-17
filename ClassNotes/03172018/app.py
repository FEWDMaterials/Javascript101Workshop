'''
    Declare F = 32;
    Expression ( F - 32 ) / 1.8;
    Declare C = Evaluated expression from [2]
'''

F = 32
C = (F-32)/1.8

print(C)

if C > 0:
    print("a")
else:
    print("b")

print("{} degrees Celcius".format(C))
