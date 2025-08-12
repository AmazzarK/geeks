
#exercice 4 Some Geography
#qst1
def describe_city(city,country):
    return f"{city} is in {country}."

#qst2
describe_city('casa', 'morocco')
#test
print(describe_city('casa', 'morocco'))  

#qst3
def describe_city_with_default(city, country='Morocco'):
    x=print(f"{city} is in {country}.")
    return x


#test  qst4
describe_city_with_default('rabat')

