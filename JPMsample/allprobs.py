#Implement a function that takes a string as input and returns the first non-repeating character in the string.

def find_first_non_repeating_char(string):
    char_count = {}
    for char in string:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1

    for char in string:
        if char_count[char] == 1:
            return char

    return None


#Write a program to find the second largest element in an array of integers.

def find_second_largest(arr):
    largest = arr[0]
    second_largest = None

    for i in range(1, len(arr)):
        if arr[i] > largest:
            second_largest = largest
            largest = arr[i]
        elif arr[i] != largest and (second_largest is None or arr[i] > second_largest):
            second_largest = arr[i]

    return second_largest


#Given an array of integers, find all pairs of numbers that add up to a specific target number.

def find_pairs(arr, target_sum):
    pairs = []
    num_set = set(arr)

    for num in arr:
        complement = target_sum - num
        if complement in num_set:
            pairs.append((num, complement))
            num_set.remove(num)

    return pairs


#Implement a function that checks if a given string is a palindrome.
def is_palindrome(string):
    return string == string[::-1]


#Write a program to sort an array of integers using a bubble sort algorithm.
def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


#Write a function that takes a list of integers as input and returns the sum of the even numbers in the list.

def sum_even_numbers(numbers):
    total = 0
    for num in numbers:
        if num % 2 == 0:
            total += num
    return total


#Implement a function that takes a list of words and returns a dictionary that maps each word to its length.

def word_lengths(words):
    return {word: len(word) for word in words}


#Write a function that takes a list of integers and returns the maximum product of any two numbers in the list.
def max_product(numbers):
    if len(numbers) < 2:
        return None
    max_product = float('-inf')
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            product = numbers[i] * numbers[j]
            if product > max_product:
                max_product = product
    return max_product

#Implement a function that takes a string and returns the most common letter in the string.
def most_common_letter(string):
    char_count = {}
    for char in string:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    most_common = None
    max_count = 0
    for char in char_count:
        if char_count[char] > max_count:
            max_count = char_count[char]
            most_common = char
    return most_common

#Write a function that takes a list of integers and returns a new list with any duplicates removed, while preserving the order of the remaining elements

def remove_duplicates(numbers):
    unique_numbers = []
    for num in numbers:
        if num not in unique_numbers:
            unique_numbers.append(num)
    return unique_numbers
