#exercice03
#qst1

class Song:
    def __init__(self):
        self.lyrics   = [] 
        


#qst2
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

 
#qst3
lyrics  = [
    "There’s a lady who's sure",
    "",
    "all that glitters is gold",
    "",
    "and she’s buying a stairway to heaven"
]

#qst4
stairway = Song()
stairway.lyrics = lyrics
stairway.sing_me_a_song()





       
        