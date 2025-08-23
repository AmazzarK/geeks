qst=input("Enter a word: ")

dict = {}

for index, value in enumerate(qst):
    if value in dict:
        dict[value].append(index)
    else:
        dict[value]=[index]



print(dict)


