# Implement a function that takes a string as input and returns True if the string is a palindrome (reads the same forwards and backwards), and False otherwise.

def is_palindrome(s):
    return s == s[::-1]
