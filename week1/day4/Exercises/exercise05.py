from exercise05 import Family
class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)


    def use_power(self, name):
        for member in self.members:
         if member['name'] == name:
            if member['age'] > 18:
                print(f"{member['name']} can {member['power']}!")
            else:
                raise Exception(f"{member['name']} is not over 18 years old and cannot use their power yet.")

    def incredible_presentation(self):
         print("\n Here is our powerful family ")
         super().family_presentation()
         for member in self.members:
            print(f" {member['incredible_name']} - Power: {member['power']}")



