Steps from Client/Server Review
===


Set up Node + Express to use Body-Parser
---
- npm init
- npm install express --save
- npm install body-parser --save

Client side setup
---
- created public folder
- create vendors folder in public
- create views folder in public
- create index.html and styles.css in views folder
- place jquery js file in vendors
- create cripts folder in public
- create client.js in scripts
- src jquery, then client.js
- link styles.css
- add .gitignore file
- gitignore .DS_Store and node_modules

Server setup
---
- create'server.js'
- require the following:
 - express
 - path
 - body-parser
- set app to be an express app: var app = express() ;
- set up uses:
 - bodyParser.urlencoded
 - express.static for public folder
- add spin up server code (app.listen)
- test server up
- add serve the html file code
- restart server
- open page in browser

AJAX get
---
- add AJAX get call function in client.js
 - makes a GET call to a route
 - console logs out the response
- run this function on doc ready
- add get route to server.js
 - logs out (in terminal) that states that the route has been hit
 - responds with a simple object
- restart server
- reload page
- check the function is running on page load
- check the terminal that the get route's console log is showing correctly
- check the browser console that the server response is logging correctly