#exercice05

#qst1-2

class Zoo:
    def __init__(self ,name):
        self.animals   = [] 
        self.name   = name  

#qst3

    def add_animal(self,new_animal):
        if new_animal in self.animals:
            print(f"{new_animal} is already in ur Zoo")
        else:
            self.animals.append(new_animal)
            print(f"{new_animal} is added in ur Zoo")

#qst4

    def get_animals(self ,new_animals):
        x=[]
        for i in range(len(new_animals)):
             single_line= print(f"Animal at index {i} is {new_animals[i]}")
             x.append(single_line)
        return x
#qst5
    def sell_animal(self ,animal_sold):
        for i in range(len(self.animals)):
            if animal_sold == self.animals[i]:
                 self.animals.pop(i)
            else:
                print(f"{animal_sold} dosn't exist in ur list")

#qst6
    def sort_animals(self):
        
        sorted_animals=sorted(self.animals)
        for i in range(len(sorted_animals)):
            first_letter=sorted_animals[i]
            print(f"{first_letter}: {self.animals}")
    

#qst7

    def get_groups(self):
       group_animal={}
       sorted_animals=sorted(self.animals)

       for animal in sorted_animals:
           letter=animal[0].upper()
           letter.append(group_animal)

       for letter in sorted_animals:
           names = ", ".join(group_animal[letter])
           print(f"{letter}: {names}")


#qst8

new_york_zoo =Zoo("new_york")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Bear")
new_york_zoo.get_animals()
new_york_zoo.get_groups()
new_york_zoo.sell_animal()
new_york_zoo.sort_animals()
