def min_substitutions(strings):
    result = []
    for s in strings:
        count = 0
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                count += 1
        result.append(count)
    return result

min_substitutions ("add")    

strings = ["add", "book", "break"]
result = min_substitutions(strings)
print(result)  # Output: [1, 1, 0]