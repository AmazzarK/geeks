
#qst1
class Dog():
    def __init__(self, name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight

#qst2
    def bark(self):
         return self.name
       
    def run_speed(self):
        return self.weight/(self.age)*10
        

    def fight (self,other_dog):
        if other_dog.run_speed()*other_dog.weight < self.run_speed()*self.weight:
            print (f"{self.name} had won the fight")
        else :
            print (f"{other_dog.name} had won the fight")



#qst3

obj1 = Dog("brad", 3,10)
obj2 = Dog("don", 3,15)
obj3 = Dog("max", 3,8)
       

dogs=[obj1,obj2,obj3]


#barkmethod test 


for dog  in dogs:
    print(f"the name of dog:" , dog.bark())



#fightmethod


obj1.fight(obj2)
obj2.fight(obj3)
obj3.fight(obj1)
   