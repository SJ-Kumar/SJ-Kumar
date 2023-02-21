import requests

url = "https://whatsapp-profile-pic.p.rapidapi.com/wspic/url"

querystring = {"phone":"34605797764"}

headers = {
	"X-RapidAPI-Key": "90d09469fdmsh603a8182f61dd63p1ffd67jsn5d89089d43d7",
	"X-RapidAPI-Host": "whatsapp-profile-pic.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)