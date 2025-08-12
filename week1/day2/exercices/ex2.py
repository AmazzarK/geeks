

#Exercise 2 : cinemax

#function
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family_list = list(family.items())

def cinemax(name, age):
    if age < 3:
        return f"{name} gets a free ticket."
    elif 3 <= age < 12:
        return f"{name} gets a ticket for $10."
    else:
        return f"{name} gets a ticket for $15."


#test
print(cinemax('rick', 43))  
print(cinemax('beth', 13)) 
print(cinemax('morty', 5)) 
print(cinemax('summer', 8))  