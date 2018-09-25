# Json parser filter

It is a simple service which takes json request and returns a filtered modified response based on some predefined condition

## Getting Started

The project uses node.js for the server

### Prerequisites

1) Internet Connection to download the source code and required softwares
2) Understanding of npm,node.js

### Installing


 1. Install node.js  
   1. Download the repo(or clone) 
    1. Open the terminal and navigate to the directory
    1. run `npm install `
  This will install all the modules mentioned in the package.json file.

1. After the registation is complete, you will get an api key, add that in the appropriate block for mailgun and sendgrid respectively in the config file.
src/server/config/config.js
1. For MAilGun get the sandbox domain name and replace it in the config.js file
1.  After the setup is complete, navigate to the app.js file inside the src/server folder 
   run ` node app.js `
This will start the server
browse on http://localhost:3000/


## Limitations and assumptions
1. The condition to filter is hardcoded, it will check for workflow completed and type htv.
1. For new format and new conditons, create new method in request parser

## Built With

* [Nodejs](https://nodejs.org/en/docs/) - api server
* [Express](https://expressjs.com/) - Web Framework used



## Authors

* **Naved Mir** -(https://github.com/navedmir)
