# Here are the functions to print Top View, Bottom View, Left View, and Right View of a Binary Tree:

class Node:
    def __init__(self, val=None, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
#Function to print Top View of Binary Tree:
def top_view(root):
    if not root:
        return []
    
    queue = [(root, 0)]
    top_view_dict = {}
    
    while queue:
        node, level = queue.pop(0)
        
        if level not in top_view_dict:
            top_view_dict[level] = node.val
        
        if node.left:
            queue.append((node.left, level - 1))
        
        if node.right:
            queue.append((node.right, level + 1))
    
    return [top_view_dict[level] for level in sorted(top_view_dict)]


# Function to print Bottom View of Binary Tree:
def bottom_view(root):
    if not root:
        return []
    
    queue = [(root, 0)]
    bottom_view_dict = {}
    
    while queue:
        node, level = queue.pop(0)
        
        bottom_view_dict[level] = node.val
        
        if node.left:
            queue.append((node.left, level - 1))
        
        if node.right:
            queue.append((node.right, level + 1))
    
    return [bottom_view_dict[level] for level in sorted(bottom_view_dict)]

# Function to print Left View of Binary Tree:
def left_view(root):
    if not root:
        return []
    
    queue = [root]
    left_view_list = []
    
    while queue:
        n = len(queue)
        
        for i in range(n):
            node = queue.pop(0)
            if i == 0:
                left_view_list.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    return left_view_list

#Function to print Right View of Binary Tree:
def right_view(root):
    if not root:
        return []
    
    queue = [root]
    right_view_list = []
    
    while queue:
        n = len(queue)
        
        for i in range(n):
            node = queue.pop(0)
            if i == n-1:
                right_view_list.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    return right_view_list

# These functions have a time complexity of O(n), where n is the number of nodes in the binary tree. 
# The basic idea behind these functions is to traverse the tree using BFS and keep track of the nodes seen at each level or position. 
# The Top View and Bottom View functions use a dictionary to keep track of the nodes seen at each level, 
# while the Left View and Right View functions simply append the first or last node seen at each level to the output list.