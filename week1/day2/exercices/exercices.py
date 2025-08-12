#Exercise 1 : Convert lists into dictionaries


my_dict = dict(zip(['Ten', 'Twenty', 'Thirty'], [10, 20, 30]))  

print(my_dict) 

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

#Exercise 3 : zara


zara_dict = {

    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes":["men", "women", "children", "home" ],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }

}



