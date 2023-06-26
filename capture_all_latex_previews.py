import os
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import pyautogui
import PIL

dry_run = False

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

driver.get('http://localhost:1313/formulas')
driver.implicitly_wait(10)

def zoom_in(times=1):
    for i in range(times):
        pyautogui.hotkey('command', '+')

# Find the list items within the specified <ul> element
ul_element = driver.find_element(By.CSS_SELECTOR, 'ul.flex.flex-row.mt-8')
list_items = ul_element.find_elements(By.TAG_NAME, 'li')

# Count the number of list items. Subtract one for the next button.
page_count = len(list_items) - 1
print(f"Found {page_count} pages of formulas")

# increase zoom to 400% for higher quality screenshots
# zoom_in(8) # TODO, screenshots become weird when zoomed in, but we want this for higher quality screenshots
for i in range(1, page_count + 1): # iterate over pages
    print("Visiting page: ", i)
    # visit formulas page
    driver.get(f'http://localhost:1313/formulas/page/{i}')

    # Find the section with class "grid-container mt-6"
    section = driver.find_element(By.CSS_SELECTOR, 'section.grid-container.mt-6')

    # Find all anchor elements within the section
    anchors = section.find_elements(By.TAG_NAME, 'a')
    num_anchors = len(anchors)
    print(f"Found ", num_anchors, " formula grid items")

    # Iterate over the formula grid items
    for i in range(num_anchors):
        # if I iterate over the anchors they become stale so refetch section, anchors every time
        section = driver.find_element(By.CSS_SELECTOR, 'section.grid-container.mt-6')
        anchors = section.find_elements(By.TAG_NAME, 'a')
        anchor = anchors[i]
        href = anchor.get_attribute('href')
        x_path = f"//*[@id=\"main-content\"]/section[2]/a[{i+1}]/div[1]"

        div = anchor.find_element(By.XPATH, x_path)

        # http://localhost:1313/formulas/<folder_name>/
        folder_name = href.split('/')[-2]
        output_image_path = os.path.join("content", "formulas", folder_name, "preview.png")
        
        if dry_run:
            print(f"Would have screenshot div {div} to {output_image_path}")
        else:
            bits = div.screenshot_as_png
            with open(output_image_path, 'wb') as f:
                f.write(bits)
            print(f"Screenshot div {div} to {output_image_path}")
            time.sleep(0.7) # if we don't sleep, elements become stale
