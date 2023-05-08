import os
import requests
import oauthlib
import oauth2
import oauth2_client
from oauth2.clients import WebApplicationClient

# Set up the OAuth2 client
client_id = os.environ['CLIENT_ID']
client_secret = os.environ['CLIENT_SECRET']
client = Client(WebApplicationClient(client_id=client_id))

# Step 1: Redirect the user to the authorization URL
authorization_endpoint = 'https://github.com/login/oauth/authorize'
authorization_url, state = client.authorization_url(authorization_endpoint)

print('Go to the following URL to authorize the application:')
print(authorization_url)

# Step 2: Get the authorization code from the user
authorization_response = input('Enter the full callback URL: ')
token_endpoint = 'https://github.com/login/oauth/access_token'
token = client.fetch_token(token_endpoint, authorization_response=authorization_response,
                           client_secret=client_secret)

# Step 3: Use the token to make API requests
api_endpoint = 'https://api.github.com/user/repos'
headers = {'Authorization': f'Bearer {token["access_token"]}'}
response = requests.get(api_endpoint, headers=headers)

if response.status_code == 200:
    repositories = response.json()
    print(f'User has {len(repositories)} repositories:')
    for repo in repositories:
        print(repo['name'])
else:
    print(f'Error: {response.status_code} {response.reason}')
