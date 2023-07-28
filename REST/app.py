from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data for books
books_data = [
    {'id': '1', 'title': 'Book 1', 'author': 'Author 1'},
    {'id': '2', 'title': 'Book 2', 'author': 'Author 2'},
    {'id': '3', 'title': 'Book 3', 'author': 'Author 1'},
]

# Get all books
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books_data)

# Get a specific book by ID
@app.route('/books/<string:book_id>', methods=['GET'])
def get_book(book_id):
    for book in books_data:
        if book['id'] == book_id:
            return jsonify(book)
    return jsonify({'message': 'Book not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)