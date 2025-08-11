#exercice01

month = int(input("Enter a month number (1-12): "))
if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:       
    season = "Invalid month number"

print("The season is:", season)

#exercice02

for index in range(0,21):
    if index % 2 == 0:
        print(f"{index} is even")
#exercice03
myname = "kaoutar"

while True:
    username = input("Enter ur name: ")
    if username == myname:
        print(f"hello {username} welcome we have the same name!")
        break
    else:
        print(f"hello {username} ur name matched not in my name, let's give another try !")

#exercice04

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
username = input("Enter a name: ")  
if username in names:
    index = names.index(username)
    print(f"thename {username} found at index {index}")
else:
    print(f"the name {username} not found in the list")

#exercice05
num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))

greatestnumber = max(num1, num2, num3)
print(f"The greatest number is: {greatestnumber}")

#exercice06

num = int(input("guess a number between 1 and 9: , type 'stop' to quit: "))

random_number = random.randint(1, 9)

while True:

    if num > random_number or num < random_number:
        print("Better luck next time")
        continue
    elif num == random_number:
        print("Winner!")
        continue
    elif num == 'stop':     
        break
  