# Implement a function that takes a list of integers as input and returns the second largest element in the list.

def second_largest_element(numbers):
    if len(numbers) < 2:
        return None
    largest = second_largest = float('-inf')
    for num in numbers:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num
    return second_largest

