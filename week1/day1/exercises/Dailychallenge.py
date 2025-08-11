#challenge1
length = int(input("Enter a length: "))
numbers = []  

for i in range(length):
    number = int(input("Enter a number: "))
    numbers.append(number) 

print("Your list of numbers is:", numbers)


#challenge2

user_input = input("Enter a string: ")
result = ""
for i in range(len(user_input)):
     
         if i == 0 or user_input[i] != user_input[i - 1]:

          result += user_input[i]

print("your word is :", result)  