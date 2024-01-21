from flask import Flask, request
from bs4 import BeautifulSoup
import requests
import lxml
from dotenv import load_dotenv
from openai import OpenAI
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import os
from headers import HEADERS

# setup
app = Flask(__name__)
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# Firebase Setup
cred = credentials.Certificate('eco-scan-firebase-adminsdk-zb1aw-f22f3c50fd.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://eco-scan-default-rtdb.firebaseio.com'
})
ans = db.reference('answers')

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

def feed_scrape_data(url):
    element_ids_to_scrape = ["productTitle", "productFactsDesktopExpander", "feature-bullets", "productDetails_detailBullets_sections1", "productDescription", "important-information", "aplus"]
    headers = HEADERS
    scraped_elements = scrape_elements_content(url, headers, element_ids_to_scrape)

    return scraped_elements
    
def process_AI(queary):
    # Setup for OpenAI
    load_dotenv()
    api_key = os.getenv("OPENAI_API_KEY")
    client = OpenAI(api_key=api_key)

    # Prompt OpenAi
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system",
            "content": "Given the scraped data from Amazon, describe what materials that the product is made out of and approximately the amount of that material. Describe the environmental impacts of said material taking in consideration how much of it is present in the product. Also describe the envirenmental impact of shipping the product from its manufactured location. Also, output a response in a organized under the headers of: 'Materials', 'Manufacturing', 'Shipping'"
            },
            {"role": "user", 
            "content": str(queary)
            }
        ]
    )

    return completion.choices[0].message.content

def write_to_firebase(data):
    ans.set({
        'test': data
    })

@app.route("/")
def homePage():
    search_input = request.args.get('searchInput', default='', type=str)
    url = str(search_input)
    write_to_firebase(str(process_AI(feed_scrape_data(url))))
    return str(process_AI(feed_scrape_data(url)))

if __name__ == "__main__":
    app.run(debug=True)

