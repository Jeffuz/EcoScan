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
    URL = "https://www.amazon.com/Teenage-Mutant-Ninja-Turtles-83281/dp/B0BKH84VDB/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=WDZiW&content-id=amzn1.sym.a849384c-231b-4855-a877-41dbabe368a3%3Aamzn1.symc.1065d246-0415-4243-928d-c7025bdd9a27&pf_rd_p=a849384c-231b-4855-a877-41dbabe368a3&pf_rd_r=FDJA3PDTAGHPKSR9K9TZ&pd_rd_wg=Lz4hO&pd_rd_r=5ad289d3-9a4e-44b1-a0b9-4d6b78a68164&pd_rd_i=B0BKH84VDB&th=1"
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

