"""
Script that corrects all of the preview pngs in the content/formulas directory
so that they fit within the open-graph preview properly.
"""

import os
from PIL import Image

desired_height = 600
desired_width = 1500


def normalize_image(img_path, height, width):
    # Open the image
    image = Image.open(img_path)

    # If the image is already the desired size, return
    if image.height == height and image.width == width:
        # print(f"Image {img_path} is already the desired size, skipping")
        return 1

    # Calculate the aspect ratio of the original image
    aspect_ratio = image.width / image.height

    # Calculate the new dimensions for the scaled image while maintaining the aspect ratio
    if width / height < aspect_ratio:
        new_width = width
        new_height = int(new_width / aspect_ratio)
    else:
        new_height = height
        new_width = int(new_height * aspect_ratio)

    # Scale down the image while preserving the aspect ratio
    scaled_image = image.resize((new_width, new_height), Image.ANTIALIAS)

    # Create a new blank image with the desired dimensions
    new_image = Image.new("RGB", (width, height), "white")

    # Calculate the position to paste the scaled image to center it in the new image
    x = (width - new_width) // 2
    y = (height - new_height) // 2

    # Paste the scaled image onto the new image
    new_image.paste(scaled_image, (x, y))

    # Save the modified image to the same path
    new_image.save(img_path)
    print(f"Normalized {img_path}")
    return 0

if __name__ == "__main__":
    img_paths = []
    for folder in os.listdir("content/formulas"):
        folder_path = os.path.join("content/formulas", folder)
        preview_png = os.path.join(folder_path, "preview.png")
        if os.path.exists(preview_png):
            img_paths.append(preview_png)
        else:
            print(f"Warning: {folder_path} is missing a preview.png!")
    
    skipped_images = 0
    for img_path in img_paths:
        skipped_images += normalize_image(img_path, desired_height, desired_width)
    
    print(f"Done normalizing images, skipped {skipped_images} images")
