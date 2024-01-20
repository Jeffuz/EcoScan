from flask import Flask
from bs4 import BeautifulSoup
import requests
import lxml
from headers import HEADERS

# app = Flask(__name__)

# Scrape Content Based on ID
def scrape_elements_content(url, headers, element_ids):
    page = requests.get(url, headers=headers)
    raw_html = BeautifulSoup(page.content, "lxml")
    
    result = {}
    for element_id in element_ids:
        element = raw_html.find(id=element_id)
        if element:
            result[element_id] = element.get_text(strip=True)

    return result

# URL and headers
URL = "https://www.amazon.com/dp/B0B2Y4KQGF?ref_=cm_sw_r_apin_dp_Q5WA97MBCW35PWKV1FYH&language=en-US&th=1"

# List of element IDs to scrape
element_ids_to_scrape = [
    "productTitle", "feature-bullets", "productDetails_detailBullets_sections1", "productDescription", "important-information", "aplus"
]
headers = HEADERS

# Scrape Content for all elements
scraped_elements = scrape_elements_content(URL, headers, element_ids_to_scrape)

for element_id, content in scraped_elements.items():
    print(f"{element_id}: {content}\n")

# @app.route("/")
# def homePage():
#     pass

# if __name__ == "__main__":
#     app.run(debug=True)

