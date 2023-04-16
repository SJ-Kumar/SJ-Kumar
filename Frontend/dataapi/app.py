from flask import Flask, render_template, request, jsonify, g
from flask_sqlalchemy import SQLAlchemy

# Create Flask app
app = Flask(__name__)

# Configure database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'  # Use SQLite database file
db = SQLAlchemy(app)

# Define a model for the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    age = db.Column(db.Integer)

    def __init__(self, name, age):
        self.name = name
        self.age = age

# Create database tables
db.create_all()

# Define API routes
@app.route('/api/users', methods=['GET', 'POST'])
def users():
    # Get Flask application context
    with app.app_context():
        if request.method == 'GET':
            # Get all users from the database
            users = User.query.all()
            return jsonify({'users': [{'id': user.id, 'name': user.name, 'age': user.age} for user in users]})
        elif request.method == 'POST':
            # Add a new user to the database
            name = request.form['name']
            age = request.form['age']
            #user = User(name=name, age=age)
            g.user_name = name
            g.user_age = age

            #db.session.add(user)
            #db.session.commit()
            return jsonify({'message': 'User added successfully!'})

# Define UI routes
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)