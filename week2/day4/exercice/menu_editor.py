from menu_item import MenuItem ,MenuManager


def show_user_menu():

    print("\n ------------------Restaurant Menu Manager ------------")
    print(f"View all Item (V)") 
    print( f"Add an Item (A)")
    print (f"Delete an Item (D)")
    print (f"Update an Item (U)")
    print (f"Show the Menu (S)")
    print (f"Exit (E)")

    choice = input("choose an option:")

    newmanager=MenuManager  

    if choice == "A":
        name = input("Enter item name: ")
        price = int(input("Enter item price: "))
        item = MenuItem(name, price)
        print(item.save())

    elif choice == "V":
        name = input("Enter item name to view: ")
        print(newmanager.get_by_name(name))

    elif choice == "D":
        name = input("Enter item name to delete: ")
        item = MenuItem(name, 0)
        print(item.delete())

    elif choice == "U":
        name = input("Enter item name to update: ")
        new_name = input("Enter new name: ")
        new_price = int(input("Enter new price: "))
        item = MenuItem(name, 0)
        item.item_name = new_name
        item.item_price = new_price
        print(item.update())

    elif choice == "S":
        print(newmanager.all_items())

    elif choice == "E":
        print("Exiting program.")
        return

    else:
        print("Invalid choice. Please try again.")

    show_user_menu()  


show_user_menu()

