#Ex01

import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * self.radius ** 2

    def definition(self):
        print("A circle is a shape with all points equidistant from its center.")

#test
c1=Circle()
c2 = Circle(3)
c3 = Circle(5)

print("Circle 1:")
print("Radius:", c1.radius)
print("Perimeter:", round(c1.perimeter(), 2))
print("Area:", round(c1.area(), 2))
c1.definition()

print("\nCircle 2:")
print("Radius:", c2.radius)
print("Perimeter:", round(c2.perimeter(), 2))
print("Area:", round(c2.area(), 2))
c2.definition()

print("\nCircle 3:")
print("Radius:", c3.radius)
print("Perimeter:", round(c3.perimeter(), 2))
print("Area:", round(c3.area(), 2))
c3.definition() 


print("\n End thank you for your attention")




#ex2

import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

lettes_list = ['a','b','c','d','e','f']


MyList=MyList(lettes_list)


print("Original List:", MyList.letters)
print("Reversed List:", MyList.get_reversed())
print("Sorted List:", MyList.get_sorted())
