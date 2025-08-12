#Exercise 3 : Zara

#dictionary brand qst1
brand_dict = {

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
print(brand_dict)
#add new key number_stores qst2
brand_dict['number_stores'] = '2'
#test
print(brand_dict['number_stores'])

#explain how Zara clients are qst3  
type_of_clothes = brand_dict['type_of_clothes'] 
print(f"Zara clients are interested in {', '.join(type_of_clothes)} clothes.")

#add  new key country_creation qst4
brand_dict['country_creation'] = 'Spain'
#test
print(brand_dict['country_creation'])


#function to check if a key exists qst5
def key_exists(brand_dict, international_competitors):
    if international_competitors in brand_dict:

        brand_dict[international_competitors].insert(0, 'Desigual')
        return print(f"{international_competitors} exists in the dictionary")
    else:
        return print(f"{international_competitors} does not exist in the dictionary")
    
key_exists(brand_dict, 'international_competitors')

#test 
print(brand_dict['international_competitors'])

#del key qst6
del brand_dict['creation_date']
#test   
print(brand_dict)

#print info about last international competitor qst7
last_competitor = brand_dict['international_competitors'][-1]

print(f"The last international competitor is {last_competitor}")

#print the major color in the US qst8

colors = brand_dict['major_color']['US']
print(f"The major color in the US are : { ','.join(colors)}")

#Print the amount of key value pairs qst9
print(f"The amount of key value pairs in the dictionary is: {len(brand_dict)}")

#Print the keys of the dictionary qst10

print("The keys of the dictionary are:" + ', '.join(brand_dict.keys()))
#dict_more_on_zara qst 11

dict_more_on_zara = {
        "creation_date": 1975,
        "number_stores": 10000
}

#test
print(f"Zara was created in {dict_more_on_zara['creation_date']} and has {dict_more_on_zara['number_stores']} stores worldwide.")

#adding method qst12
print("Before adding the new information, the brand dictionary is:")
print(brand_dict)

brand_dict.update(dict_more_on_zara)
print("After adding the new information, the brand dictionary is:")
print(brand_dict)   

#number_stores  qst13
number_stores = brand_dict['number_stores']
print(f"Zara has {number_stores} stores worldwide.")
