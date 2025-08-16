# Ex01
string="Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

list_cars=string.split(',')


length=sorted(list_cars,reverse=True)
print(list_cars)


count_o=0
count_i=0
for i in list_cars:
   
        count_o+=i.lower().count('o')

   
        count_i+=i.lower().count('i')
print(f"count of o is {count_o},count of i is {count_i}")

new_list=["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

set=set(new_list)
new_list=set
print (new_list)


# Ex02


def get_full_name(first_name, last_name, middle_name=""):
   
    first_name = first_name.capitalize()
    last_name = last_name.capitalize()
    middle_name = middle_name.capitalize()

  
    if middle_name:
        return f"{first_name} {middle_name} {last_name}"
    else:
        return f"{first_name} {last_name}"



print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))


# Ex03

MORSE_CODE = {
    'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',  'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',  'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',  'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',
    'Y': '-.--',  'Z': '--..',  '1': '.----','2': '..---',
    '3': '...--', '4': '....-', '5': '.....','6': '-....',
    '7': '--...', '8': '---..', '9': '----.','0': '-----'
}

REVERSE_MORSE = {value: key for key, value in MORSE_CODE.items()}


def english_to_morse(text):
    text = text.upper()
    morse_words = []
    for word in text.split():
        morse_chars = [MORSE_CODE.get(char, '') for char in word]
        morse_words.append(' '.join(morse_chars))
    return ' / '.join(morse_words)

def morse_to_english(code):
    words = code.split(' / ')
    english_words = []
    for word in words:
        chars = word.split()
        english_chars = [REVERSE_MORSE.get(char, '') for char in chars]
        english_words.append(''.join(english_chars))
    return ' '.join(english_words)


# test
message = "Hello World"
morse_code = english_to_morse(message)
print("Morse:", morse_code)

decoded = morse_to_english(morse_code)
print("English:", decoded)