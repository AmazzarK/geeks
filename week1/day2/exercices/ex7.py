#exercise 7 : Temperature Advice


#qst1.1
import random
def get_random_temp():

      temp = random.randint(-10, 40)
      return temp

#qst1.2

get_random_temp()

#qst2

def main(temp):   

    get_random_temp()
    x=print(f"The temperature is {temp}°C")

    return x

#test

print(main(get_random_temp()))


#qst3

def main_improved(temp):
    if temp < 0:
        return "Brrr, that’s freezing! Wear some extra layers today"
    elif 0 <= temp <= 16:
        return "Quite chilly! Don’t forget your coat"
    elif 16 <= temp <= 23:
        return "It’s a bit cool, a sweater should be enough"
    elif 24 < temp <= 32:
        return "It’s warm! A t-shirt should be fine"   
    else:
        return "It's hot! Stay hydrated and wear light clothing."


#qst4

def get_random_temp_updated():
    temp = random.randint(-10, 40)
    if -10 <= temp <= 16:
       x= print(f"The session is winter")
    elif 17 <= temp <= 40:
      x =  print(f"The session is summer")

    return x

#qst4.3


def main_with_season():
    season = input("Enter a season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp_updated(season)
    print(f"The temperature is {temp}°C")
    print(main_improved(temp))



#qst6

def get_season_from_month(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        raise ValueError("Invalid month")
