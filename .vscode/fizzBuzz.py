#FIZZBUZZ challenge in python
def fbFor():
    for i in range(1,101):
        if i % 3 == 0 and i % 5 == 0:
            print('FIZZBUZZ')
        elif i % 3 == 0:
            print('FIZZ')
        elif i % 5 == 0:
            print('BUZZ')
        else:
            print(i)
        
    
def fbWhile():
    i = 0
    while i < 100:
        if i % 3 == 0 and i % 5 == 0:
            print('FIZZBUZZ')
        elif i % 3 == 0:
            print('FIZZ')
        elif i % 5 == 0:
            print('BUZZ')
        else:
            print(i)
        i += 1

print(fbFor())
   
        




