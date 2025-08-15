class Family():
     def __init__(self, members,last_name ):
        self.members = members
        self.last_name = last_name

#qst2
     def born(self, **kwargs):
        self.members.append(kwargs)
        print(f" Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new child')}!")

     def is_18(self):
         
         for member in self.members:
            if member['last_name'] == self.last_name and member['age'] >= 18 :
                return True
            else:
                return False
     def family_presentation(self):
        print(f"\n The {self.last_name} Family:")
        for member in self.members:
            print(f" - {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

          
        

            
     






#test

initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", initial_members)
print(my_family.last_name)     
print(my_family.members)       

     
