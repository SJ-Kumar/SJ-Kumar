# Write a function that takes a list of integers and returns the index of the first occurrence of the largest element in the list.

def first_index_of_largest(numbers):
    if not numbers:
        return None
    max_num = max(numbers)
    return numbers.index(max_num)
