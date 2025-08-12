data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
def quiz(data):
    
    for item in data:
        user_answer = input(f"{item['question']} ")
        list_wrong_answers = []
        list_correct_answers = []
        if user_answer.lower() == item['answer'].lower():
            list_correct_answers.append(user_answer)
            print("Correct!")

        else:
            list_wrong_answers.append(user_answer)
            print(f"Wrong! The correct answer is: {item['answer']}")
            
    return list_correct_answers, list_wrong_answers
#qst2

def main():
    x,y=quiz(data)
    lenth_correct_answers=len(x)
    length_wrong_answers=len(y)
    result=print(f"You answered {lenth_correct_answers} questions correctly and {length_wrong_answers} questions incorrectly.")
    return result
    
  
#qst 3


def main_improved():
    x,y=quiz(data)
    lenth_correct_answers=len(x)
    length_wrong_answers=len(y)
    if length_wrong_answers > 3:
        result = print("game over !try agin")
    else:    
        result = print(f"You answered {lenth_correct_answers} questions correctly and {length_wrong_answers} questions incorrectly.")

    return result
