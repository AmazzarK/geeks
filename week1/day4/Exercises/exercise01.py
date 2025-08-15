class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():  
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

##qst 1

class Siamese(Cat):
    def __init__(self, name, age):
        super().__init__(name,age)


#qst2
obj1 = Bengal("Leo", 3)
obj2 = Chartreux("Milo", 4)
obj3 = Siamese("Luna", 2)

all_cats=[obj1,obj2,obj3]

#qst3

sara_pets=Pets(all_cats)

#qst4

for i in sara_pets.animals :
    print(i.walk())
    


