import os

# Create necessary directories
directories = [
    'static/css',
    'static/js',
    'static/images',
    'static/uploads',
    'templates'
]

for directory in directories:
    os.makedirs(directory, exist_ok=True)
    print(f"Created directory: {directory}")

print("Directory structure created successfully!")

