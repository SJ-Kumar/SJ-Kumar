# Import necessary libraries for Flask and MySQL
from flask import Flask, request, render_template
from flask_mysqldb import MySQL

# Initialize Flask app
app = Flask(__name__)

# Configure MySQL connection
app.config['MYSQL_HOST'] = 'localhost'  # Update with your MySQL host
app.config['MYSQL_USER'] = 'your_mysql_user'  # Update with your MySQL username
app.config['MYSQL_PASSWORD'] = 'your_mysql_password'  # Update with your MySQL password
app.config['MYSQL_DB'] = 'your_mysql_db'  # Update with your MySQL database name

# Initialize MySQL object
mysql = MySQL(app)

# Define feedback submission route
@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    # Fetch feedback data from form
    feedback_text = request.form['feedbackText']

    # Insert feedback into MySQL database
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO feedback (feedback_text) VALUES (%s)", (feedback_text,))
    mysql.connection.commit()
    cur.close()

    # Render success page
    return render_template('success.html')

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
