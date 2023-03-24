import torch

# Create a tensor of size 3x3 with random values
x = torch.rand(3, 3)

# Create a tensor of size 3x1 with all ones
y = torch.ones(3, 1)

# Multiply the two tensors
z = torch.matmul(x, y)

# Print the result
print(z)
