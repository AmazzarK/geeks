#this is exercices 01
for x in range(0, 4):
    print("Hello World")


#this is exercices 02

print("the result of (99³) × 8 is :", 99**3 *8)

#this is exercices 03
myname= "kaoutar"
name = input("What is your name? ")
if name != myname:
   print("Hello", name, "opss, I thought your name also is ", myname)
else:
   print("Hello", name, "we have the same name nice to meet you")

#this is exercices 04

ur_height = float(input("What is your height in centimeters? "))
if ur_height < 145:
    print("You are tall enough to ride")

else:
    print("you need to grow some more to ride")

#this is exercices 05
my_fav_number = {1,2,3,8,9,5,7}
my_fav_number.add(20)
my_fav_number.add(10)
print(f"Set after : {my_fav_number}")
last_number = list(my_fav_number)[-1]
my_fav_number.remove(last_number )
print(f"Set before removing last number: {my_fav_number}")


#this is exercices 06

new_tuple = (9,11,48)
updated_tuple = new_tuple + (99, 100)
print(f"it's possible to add more integers in a tuple for exemple my Updated tuple will looks like : {updated_tuple}")


#this is exercices 07
basket  = ["Banana", "Apples", "Oranges", "Blueberries"]
basket .remove("Banana")
basket .remove("Blueberries")   
basket .append("Kiwi")
basket .insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(f"Final basket: {basket}")

#this is exercices 08

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

for sandwich in sandwich_orders:
    print(f"I made your {sandwich}")
    finished_sandwiches.append(sandwich)