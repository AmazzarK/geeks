#step1--2
class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals={}
#step3


    def add_animal(self , animal_type ,count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type]=count


#step4
    def get_info(self):
        info = f"{self.name} Farm\n"
        for animal, count in self.animals.items():
            info += animal + " : " + str(count) + "\n"
        info += "E-I-E-I-O!"
        return info

       
#setp5


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())


#step6
def get_animal_types(self):
     return sorted(self.animals.keys())

#test
# 
print(macdonald.get_animal_types())


#step7

def get_short_info(self):
    animal_list = self.get_animal_types()
    sentence = self.name + "'s farm has "
    plural_animals = []
    for animal in animal_list:
        plural_animals.append(animal + "s")
    sentence += ", ".join(plural_animals)
    sentence += "."
    return sentence

#test 
print(macdonald.get_short_info())
