from flask import Flask, jsonify, request

app = Flask(__name__)

# Define a sample endpoint
@app.route ('/hello', methods=['GET'])

def hello():
    return jsonify({'message': 'Hello World!'})

# Define an endpoint that accepts POST requests

@app.route('/greet', methods = ['POST'])
def greet():
        name = request.get('name')
        if name:
            return jsonify({'message': f'Hello, {name}!'})
        else:
            return jsonify({'error': 'Missing name parameter'}), 400

if __name__ == '__main__':
    app.run(debug=True)


    