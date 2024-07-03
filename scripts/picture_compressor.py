import PIL
from PIL import Image
import os

def resize_and_compress_images(directory, max_width, max_height, quality):
    # Get a list of all jpg files in the directory
    files = [file for file in os.listdir(directory) if file.lower().endswith('.jpg')]
    
    for file in files:
        file_path = os.path.join(directory, file)
        with Image.open(file_path) as img:
            # Resize the image
            img.thumbnail((max_width, max_height))
            
            # Compress the image
            img.save(file_path, "JPEG", quality=quality)
            print(f"Resized and compressed '{file}'")

# Specify the directory, maximum width and height, and compression quality
directory_path = "../pictures/rand_pictures/"
max_width = 800  # Set your desired max width
max_height = 600  # Set your desired max height
quality = 85  # Set the desired quality (1-100)

# Call the function
resize_and_compress_images(directory_path, max_width, max_height, quality)
