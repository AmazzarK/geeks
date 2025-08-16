#ex01-02

birthdays={

    "Imane": "1990/05/12",
    "Yousef": "1985/11/23",
    "Jad": "2000/01/30",
    "kaoutar": "1995/07/08",
    "maryam": "1988/03/15"

}


print("You can look up the birthdays of the people in the list!")

name = input("Enter a person's name: ")
if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}. ")
else:
    print(f"Sorry, we don't have {name}'s birthday in the list.")



#ex03


import random
def throw_dice():
    return random.randint(1, 6)


def throw_until_doubles():
    count = 0
    while True:
        count += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return count
        
def main():
    results = [] 
    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)
    total_throws = sum(results)
    average_throws = total_throws / len(results)
    print(f" it's tooks in total u reach 100 doubles: {total_throws}")
    print(f"the average amount of throws to reach doubles : {average_throws:.2f}")
if __name__ == "__main__":
    main()