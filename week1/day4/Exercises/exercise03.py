#qst1
from exercise02 import Dog
#qst2-3

class PetDog (Dog):
    def __init__(self, name, age, weight,trained = False):
        super().__init__(name, age, weight)
        self.trained = trained 


#qst4
    def train(self):
        self.trained = True
        return print(f"the name of dog is:", super().bark()) 
    
    def play(self, *other_dogs):
        dog_names = [self.name]
        for dog in other_dogs:
           dog_names.append(dog)

        print(f"The names of the dogs are: {', '.join(dog_names)}")

import random

class Dog:
    def __init__(self, name):
        self.name = name
        self.trained = False

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            print(random.choice(tricks))
        else:
            print("The dog isn't trained yet.")







            

        