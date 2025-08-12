
#exercise 5 : Random Numbers
import random

def random_numbers(user_input):
    random_list = [random.randint(1, 100) ]
 
    if int(user_input) == random_list:
        print("Success! The numbers match ")
    else:
        print("failure! The numbers do not match")
    

   
random_numbers(input("Enter a number between 1 and 100: "))


