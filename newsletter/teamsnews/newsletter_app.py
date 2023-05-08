from flask import Flask, render_template, request
# import microsoftteams

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # get the newsletter content from the form
        newsletter_content = request.form['newsletter_content']

        # create the Microsoft Teams message
       # message = microsoftteams.models.TeamsMessage()
       # message.body = newsletter_content

        # send the message to a channel
        channel_id = "<your channel ID>"
        # microsoftteams.post_message(channel_id, message)
        print ("Message:"+newsletter_content)
        # redirect to a success page
        return render_template('success.html')

    # if the request method is GET, render the form page
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
