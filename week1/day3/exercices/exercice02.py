
#exercice02

#qst1-qst2
# instance d'objet dog 
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height


#test
#data seed
dog1=Dog("brad",80)
dog2 = Dog("Dex", 20)
dog3 = Dog("Pet",30)
dog4=Dog("Don",10)
davids_dog=Dog("Rex",50)
sarahs_dog=Dog("Teacup",20)
#Data show

dogs=[dog1,dog2,dog3,dog4,davids_dog]
print(dogs)

for dog in dogs:
    print(f"name dog is: {dog.name} and his height is: {dog.height}cm")



#qst3
    
    def bark(self):
        x=print(f"{self.name} goes woof!")
        return x

#test
    for dog in dogs:
        bark(dog)

#qst4
    def jump(self):
        x=f"{self.name} jumps {self.height * 2} cm high!"
        return x
#test
    for dog in dogs:
        jump(dog)    
    
#qst5

davids_dog=Dog("Rex",50)

#qst6

davids_dog.jump()
davids_dog.bark()



#qst7 objet sarahs_dog

sarahs_dog=Dog("Teacup",20)

#qst8

sarahs_dog.jump()
sarahs_dog.bark()

#qst9

for dog in dogs:
     i=dogs[0]
     if dogs[dog] > i :
         i=dogs[dog]
         print(f"{i.name} is the bigger dog")
        
         




