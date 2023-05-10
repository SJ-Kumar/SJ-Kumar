from flask import Flask, render_template, request
import tweepy
from linkedin_api import Linkedin

app = Flask(__name__, template_folder='templates')
print(app.template_folder)

# Set up the APIs
#blog_api_key = 'YOUR_BLOG_API_KEY'
twitter_api_key = 'row4wiYlu5Hac8xU7JZfzzywo'
twitter_api_secret_key = 'fL948RNIZFY4ziQaiixD4k9r6SpQklEu0SQV1Im28sH4iEXq8w'
linkedin_api_key = 'fL948RNIZFY4ziQaiixD4k9r6SpQklEu0SQV1Im28sH4iEXq8w'

# Set up the Tweepy API
auth = tweepy.OAuthHandler(twitter_api_key, twitter_api_secret_key)
auth.set_access_token('16052053-r6Hv7d6wzXLRAllIgyV0TLVZjHV4Npfq4HcL8ZwpR', '2EPgQ6xc8ae7L5zid1bEeSx8E2aXPe1T1cCVHGBw6ismg')
api = tweepy.API(auth)

# Set up the PyLinkedIn API
#linkedin = Linkedin(linkedin_api_key)

app = Flask(__name__)

# Create the user interface
@app.route('/')
def index():
    return render_template('index.html')

# Handle the button click
@app.route('/share', methods=['POST'])
def share():
    # Retrieve the content from the user interface
  content = request.form['content']

  # Post the content on Twitter
  try:
       api.update_status(content)
  except Exception as e:
      print(f"Error posting on Twitter: {e}")

    # Post the content on LinkedIn
    #try:
     #   linkedin.share(content)
    #except Exception as e:
     #   print(f"Error posting on LinkedIn: {e}")

  return 'Content shared successfully!'


# Run the program
if __name__ == '__main__':
    app.run()