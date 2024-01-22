# EcoScan 
EcoScan is an environmental impact assessment tool that utilizes data scraped from Amazon (more soon to come) to generate informative results pages for products, showcasing key details such as material composition, and environmental impacts from manufacturing and shipping.

![ecoscan](https://github.com/Jeffuz/eco_scan/assets/52511888/cc404033-de65-49e9-9b57-8de847ac6d9b)

## About 
### What it does
The website would prompt the user to input a link specifically from Amazon. If the user inputs a valid link, it will send it to the server. The server would scrape all relevant information on the inputted link and feed that information to a trained AI from openAI. The AI would then upload the environmental impacts of the product based on the scraped data and upload that to an online database, which the website would read and output the results back to the user on their browser.

### How we built it
The project is built using React for the front-end user page and Python for the server that houses the AI. The server was implemented with 3 different libraries/APIs, BeautifulSoup for web scraping, OpenAI for the AI system, and Firebase for data storage and travel. The webpage was primarily built using React and JavaScript, with the addition of Firebase to handle the reading information from the database.

### Challenges we ran into
The main challenge we ran into was trying to set up the project. With trying to integrate so many different libraries into our project, it wasn't easy to set up, not only on one person’s system, but replicated on everyone else's as well. We also had trouble trying to train the Ai to have desirable results. At the start, the responses it gave were too generic and not specific to be useful to the user, but we managed to fix that with refinement.

### Accomplishments that we’re proud of
We are proud to be able to put out a viable project in such a short timeframe and to be able to use a lot of complicated, yet relevant tools in our disposal. Being able to use React, AI, web scraping, and an online database, in the same project and in less than 2 days at that, is an accomplishment.

### What we learned
We learned a lot about the technologies and tools that we are using. Many of us aren’t familiar with web development so It was a good experience to step out of our comfort zone and learn something new. It was also a nice opportunity to collaborate with each other for the first time, being able to learn about our working styles, and improve our skills to work as part of a team.

### What’s next for EcoScan
Currently, there are no immediate plans to expand on this project. However, different ideas are bouncing around on ways to improve this project, One of which is to improve the UI of the result page by making it less text-heavy, and more visual. We could also improve the AI to read images from Amazon using a more advanced AI model.

But outside of just the website, we can take this idea and expand it to be a web extension rather than a separate website that users can install for online shopping, having a convenient way of seeing their environmental impact. We can even take this idea further and take it out of the internet and have an app that allows users to use their camera on their phone to scan real-life products as well.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install packages for frontend dependencies.
```bash
npm install 
```

Setup enviornment variables for server side.
```bash
python -m pip install --user virtualenv
python -m venv env
# Make sure to enable scripts on Power Shell for Window users
Set-ExecutionPolicy RemoteSigned
```
Create .env file and put in your own private OpenAi API key.
```bash
OPENAI_API_KEY = (API KEY)
```

Create headers.py file, go to this [website](https://httpbin.org/get) and fill in the below header.
```bash
HEADERS = {
    "Accept": "",
    "Accept-Encoding": "",
    "Accept-Language": "",
    "User-Agent": "",
    "X-Amzn-Trace-Id": ""
}
```

Open 2 terminals up...
```bash
# Start up the browser side in the first terminal
npm start
# Enable virtual enviornment in the second terminal
.\env\Scripts\activate # Run for Windows
source env/bin/activate # Run for MacOS
# Pip install packages and start up server within the virtual env.
pip install -r requirements.txt
python server.py
```
