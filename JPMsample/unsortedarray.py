def find_second_min(arr):
    if len(arr) < 2:
        return None
    
    min_num = float('inf')
    second_min = float('inf')
    
    for num in arr:
        if num < min_num:
            second_min = min_num
            min_num = num
        elif num < second_min and num != min_num:
            second_min = num
            
    if second_min == float('inf'):
        return None
    
    return second_min


arr = [3, 5, 2, 7, 1, 8, 4, 9, 6]
second_min = find_second_min(arr)
print(second_min)  # Output: 2


# This approach has a time complexity of O(n), where n is the length of the input array. The basic idea behind the approach is to keep track of the minimum and second minimum numbers as we iterate through the array. We initialize min_num and second_min to positive infinity so that any value in the array will be less than these values.

# As we iterate through the array, we check if the current element is less than min_num. If it is, we update second_min to be equal to min_num and update min_num to be equal to the current element. If the current element is between min_num and second_min, and it is not equal to min_num, we update second_min to be equal to the current element.

# Finally, we check if second_min is still equal to positive infinity. If it is, it means that there is no second minimum number in the array and we return None. Otherwise, we return second_min.  
