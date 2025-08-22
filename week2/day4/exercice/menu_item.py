import psycopg2

def connect():
    return psycopg2.connect(
       dbname="Resto_Menu_Manager",
       user ="postgres",
       password="123456",
       host="localhost",
       port="5432"
    )
    

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name=item_name
        self.item_price=item_price

    
    def save(self):
        conn=connect()
        cur=conn.cursor()
        cur.execute(
            "INSERT INTO Menu_Items (item_name ,item_price) VALUES ( %s , %s )",
            (self.item_name ,self.item_price)   
        )
        conn.commit()
        conn.close()
        return f"a new item has inserted in ur DB"

    

    def delete(self):
        conn=connect()
        cur=conn.cursor()
        cur.execute(
            "DELETE FROM Menu_Items WHERE item_name = %s",
            (self.item_name,)
        )
        conn.commit()
        conn.close()
        return f"u had delete an item from ur DB"

    def update(self , item_id):
        conn=connect()
        cur=conn.cursor()
        cur.execute(
            "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s",
            ( self.item_name, self.item_price ,item_id)
        )
        conn.commit()
        conn.close()
        return f"u had update a item in ur DB"


new_item = MenuItem('newitem', 500)
another_item = MenuItem('another_item', 300)
print(new_item.save())
print(new_item.delete())
print(another_item.update(1))

#qst4

class MenuManager():
    
    def get_by_name(self,item_name):
        conn=connect()
        cur=conn.cursor()
        cur.execute(
            "SELECT * FROM Menu_Items WHERE item_name = %s " ,(item_name,)
        )
        conn.commit()
        result=cur.fetchone()
        conn.close()
        return f"this is ur item details ,{result} "

    def all_items(self):
        conn=connect()
        cur=conn.cursor()
        cur.execute(
        "SELECT * FROM Menu_Items"
                )
        conn.commit()
        results = cur.fetchall()
        conn.close()
        return f"this is ur item details ,{results}"


manager = MenuManager()
print(manager.get_by_name("Chicken Burger"))
print(manager.all_items())


