import requests
from datetime import datetime

#Get the current time
now = datetime.now()
current_time = now.strftime("%H:%M:%S")


'''free API to get the weather of a place
    Requires no authorisation
    Find more at : https://weatherdbi.herokuapp.com/
'''

#I am located at Bangalore, can be replaced with any location

url= "https://weatherdbi.herokuapp.com/data/weather/bangalore"

temperature_data = requests.get(url)
current_conditions = temperature_data.json()['currentConditions']
temperature = current_conditions['temp']['c']

with open("temperatures.txt", "a") as file_handler:
    file_handler.write(str(current_time) + " , " + str(temperature) + "\n")
