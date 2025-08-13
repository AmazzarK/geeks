#exercice01
#qst1 / instance d'objet cat

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

#test
#data seed
cat1=Cat("leo",8)
cat2 = Cat("Luna", 7)
cat3 = Cat("micho",3)
cat4=Cat("katy",1)
#data show
cats=[cat1,cat2,cat3,cat4]
print(cats)

for cat in cats:
    print(f"name cat is: {cat.name} age cat is: {cat.age}")

#qst2 / function oldset cat 
def oldest_cat(cats):
    if not cats:
        return None
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cats[cat].age
    return oldest
#test
oldest_cat(cats)



#qst3 / function 
def oldest_cat(cats):
    if not cats:
        return None
    oldest = cats[0]
    for cat in cats:
        if cats[cat].age > oldest.age:
            oldest = cats[cat].age
    x= print(f"The oldest cat is {oldest.name} and is {oldest.get} years old")
    return x