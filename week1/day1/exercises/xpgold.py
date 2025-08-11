#exercice01

month = int(input("Enter a month number (1-12): "))
if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:       
    season = "Invalid month number"

    if month == 2:
        print("February has 28 days (29 in a leap year)")
    elif month in [4, 6, 9, 11]:
        print("This month has 30 days")
    else:
        print("This month has 31 days")

#exercice02