a = int(input("Enter first number"))
b = int(input("Enter second number"))
c = int(input("Enter third number"))

def odd_even(m):
    if(m %2 ==0):
        print("It is Even")
    else:
        print("It is Odd") 

if (a>=b & a>=c):
    print("Greatest number is: ",a)
    odd_even(a)

elif(b>=a & b>=c):
    print("Greatest number is: ",b)
    odd_even(b)
else:
    print("Greatest no is: ",c)
    odd_even(c)
   
