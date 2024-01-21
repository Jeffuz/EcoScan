from flask import Flask
from bs4 import BeautifulSoup
import requests
import lxml
from dotenv import load_dotenv
from openai import OpenAI
import os
from headers import HEADERS

# setup
# app = Flask(__name__)
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

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

def feed_scrape_data():
    URL = "https://www.amazon.com/FIJI-Natural-Artesian-Water-Bottles/dp/B004CQWWKY/ref=sr_1_6?crid=D6D3LZ418MWN&dib=eyJ2IjoiMSJ9.OYfqDH42qGsr8I-Y0uDMiK8TtHOp2ZEafDNxVUEVpfwU_y0t3J8UoKZ1B1FV3Vlqk7UV9Xk0ChHrhsi3-olCxIOFVLGUeOFu2RHmo4BxsCA6dtNx1Ra6plAEg0D4mkmcdVhinPcXBnGQngxkDbOJzfagYLqTN62afCAEpTdfkgB7zIZiwnZkkoLQTnw9UQn_P8rW0CVZecbOwjHe1qnrbXMXJJxOANG2sUrcaHk0fn48GP-mcwbzOJYokt0FrJt9BnNfjxnMOuEkgr0aNqvMHEewu_nx0KuHNuYC1qAro10.VbELEiS-dWao_m98C-t4HJ47WUTkC5VNnpulG74hGKs&dib_tag=se&keywords=water&qid=1705812005&sprefix=water%2Caps%2C165&sr=8-6"
    element_ids_to_scrape = ["productTitle", "productFactsDesktopExpander", "feature-bullets", "productDetails_detailBullets_sections1", "productDescription", "important-information", "aplus"]
    headers = HEADERS
    scraped_elements = scrape_elements_content(URL, headers, element_ids_to_scrape)

    # for element_id, content in scraped_elements.items():
    #     print(f"{element_id}: {content}\n\n")

    client = OpenAI(api_key=api_key)
    return scraped_elements
    
print(feed_scrape_data())

# @app.route("/")
# def homePage():
#     pass

# if __name__ == "__main__":
#     app.run(debug=True)

