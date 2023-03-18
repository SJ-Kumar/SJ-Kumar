class InfiniteGrid:
    def __init__(self):
        self.grid = {}
        
    def get(self, x, y):
        return self.grid.get((x, y), 0)
        
    def set(self, x, y, value):
        self.grid[(x, y)] = value
        
# Example usage:
grid = InfiniteGrid()
grid.set(0, 0, 1)
grid.set(1, 2, 2)
print(grid.get(0, 0))  # Output: 1
print(grid.get(1, 1))  # Output: 0
print(grid.get(1, 2))  # Output: 2
