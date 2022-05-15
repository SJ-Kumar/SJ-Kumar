print("WELCOME TO MARGAM FARMS !!")
cname = input("Please enter your name")
from datetime import date
today = date.today()
print("Your date of purchase", today)
b=int(input('''WELCOME !! PLEASE MENTION THE PRODUCTS WHICH YOU REQUIRE IN THE FORMAT AS FOLLOWS -
ENTER 1 FOR GROUNDNUT OIL
ENTER 2 FOR SESAME OIL
ENTER 3 FOR COCONUT OIL'''))
if (b==1):
        print("THANK YOU FOR SHOWING YOUR INTEREST ON OUR PURE WOOD PRESSED GNUT OIL")
        qty = int(input("enter the quantity in litres such as for 1Litre enter 1 and so on"))
        gp = 230
        if (qty==1 or qty == 2 or qty == 3 or qty == 4):
            print('''PRICE FOR 1L GNUT OIL IS RS.230
YOU WILL GET YOUR OIL WELL PACKED IN COVER''')
            city = input("Enter your city either chennai/bangalore if you would like to avail our door-step delivery option or enter 'NO DELIVERY NEEDED' if you dont want to avail delivery services")
            citylow=city.lower()
            if (citylow == "chennai" or citylow == "bangalore"):
                print("Please eneter you full address")
                add = input()
                print("Thank you !! Your order is being processed and will be delivered within 3-4 working days")
                print("You need to pay a delivery charge of RS.100")
                if (qty==1):
                    print("You need to pay an total cost of",1*gp+100)
                elif (qty==2):
                    print("You need to pay an total cost of",2*gp+100)
                elif (qty==3):
                    print("You need to pay an total cost of",3*gp+100)
                elif (qty==4):
                    print("You need to pay an total cost of",4*gp+100)
                else:
                    print("invalid quantity")
                
            elif (citylow=="no delivery needed"):
                print('''Thank you for your purchase from MARGRAM FARMS !!
YOUR ORDER IS READY AND YOU ARE REQUESTED TO COLLECT IT FROM OBEL BANJARA BANGALORE''')
              
                if (qty==1):
                    print("You need to pay an total cost of",1*gp)
                elif (qty==2):
                    print("You need to pay an total cost of",2*gp)
                elif (qty==3):
                    print("You need to pay an total cost of",3*gp)
                elif (qty==4):
                    print("You need to pay an total cost of",4*gp)
                else:
                    print("invalid quantity")

            else:
                print("INVALID INPUT!!")

        elif (qty>=5):
            print('''PRICE FOR 1L GNUT OIL IS RS.230
YOU WILL GET YOUR OIL WELL PACKED IN CAN with packets if greater than 5L such as for 6,7,8 and so on''')
            city = input("Enter your city either chennai/bangalore if you would like to avail our door-step delivery option or enter 'NO DELIVERY NEEDED' if you dont want to avail delivery services")
            citylow=city.lower()
            if (citylow == "chennai" or "bangalore"):
                print("Please eneter you full address")
                add = input()
                print("Thank you !! Your order is being processed and will be delivered within 3-4 working days")
                print("You need to pay a delivery charge of RS.100")
                if (qty==5):
                    print("You need to pay an total cost of",5*gp+100)
                elif (qty==6):
                    print("You need to pay an total cost of",6*gp+100)
                elif (qty==7):
                    print("You need to pay an total cost of",7*gp+100)
                elif (qty==8):
                    print("You need to pay an total cost of",8*gp+100)
                elif (qty==9):
                    print("You need to pay an total cost of",9*gp+100)
                elif (qty==10):
                    print("You need to pay an total cost of",10*gp+100)
                else:
                    print("invalid quantity")
                
            elif (citylow=="no delivery needed"):
                print('''Thank you for your purchase from MARGRAM FARMS !!
YOUR ORDER IS READY AND YOU ARE REQUESTED TO COLLECT IT FROM OBEL BANJARA BANGALORE''')

                if (qty==5):
                    print("You need to pay an total cost of",5*gp)
                elif (qty==6):
                    print("You need to pay an total cost of",6*gp)
                elif (qty==7):
                    print("You need to pay an total cost of",7*gp)
                elif (qty==8):
                    print("You need to pay an total cost of",8*gp)
                elif (qty==9):
                    print("You need to pay an total cost of",9*gp)
                elif (qty==10):
                    print("You need to pay an total cost of",10*gp)
                else:
                    print("invalid quantity")

            else:
                print("INVALID INPUT!!")
            

        else:
            print("INVALID INPUT!!")
            
            





                

                
                
            
            
        
        
        

    
                
    
    
