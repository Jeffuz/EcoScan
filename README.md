# EcoScan 
Ecoscan is an innovative environmental impact assessment tool, empowering users to analyze and understand the ecological footprint of products, providing transparency for sustainable decision-making

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

Open 2 terminals up...
```bash
# Start up the browser side in the first terminal
npm start
# Enable virtual enviornment in the second terminal
.\env\Scripts\activate # Run for Windows
source env/bin/activate # Run for MacOS
# Install flask and start up server within the virtual env.
pip install flask
python server.py
```