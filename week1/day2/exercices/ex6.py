#Exercise 6 : Let’s create some personalized shirts

def make_shirt():
    size = input("choose ur size (S, M, L, XL): ")
    message = input("choose ur message to print on the shirt: ")
    print(f"The size of the shirt is {size} and the text is: '{message}'")

make_shirt()

#qst3
def make_shirt_with_default_L(size='L', message='I love Python'):
    print(f"Creating a {size} shirt with the message: '{message}'")

#qst4
make_shirt_with_default_L()

#qst5
def make_shirt_with_default_M(size='M', message='hello hello'):
    print(f"Creating a {size} shirt with the message: '{message}'")
#test 
make_shirt_with_default_M()
#qst6

def make_shirt_qst6():
    size = input("choose ur size (S, M, L, XL): ")
    message = input("choose ur message to print on the shirt: ")
    print(f"ur size is {size} the message should printed on ur shirt is: '{message}'")

#test
make_shirt_qst6()

#qst7

def make_shirt_qst7(**kwargs):    
     print(f"Creating a {kwargs['size']} shirt with the message: '{kwargs['message']}'")

#test
make_shirt_qst7(size='M', message='hahaha..')
