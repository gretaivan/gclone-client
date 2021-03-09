# Gclone Client

## Installation & Usage

### Installation
* ```npm install``` to install dependencies 

### Usage
* ```npm run dev``` to run 
* ```npm test``` to run the tests

## Changelog

### index.html
[x] added form with search bar and 2 buttons 

### index.js
[x] refactored to reduce uneeded code by creating the target elements and listeners for them


### listeners.js
[x] added the event listener and handler for button search
[x] added the event listener and handler for feeling lucky
[x] fixed the query formating that send request to the server
[x] refactored event handlers to include smaller reusable functions
[x] function to get the result data
[x] function to create the result list
[x] function to create the formated one result sample and append it to the view
[x] cleanup of the file

### data.js
[x] static file 

## Bugs
[x] client sends incorrectly formatted keyword as aquery to the server


## TODO
### Functionality 
[x] upon search button pressing send request to the server with search keyword
[x] feeling lucky button: 
    [x] pass the keyword 
    [x] then generate random index for the search result
    [] select and redirect to the result with randomIndex

### Design 
[] add logo
[] style the buttons
[] format the output of the query

### Other
[x] Create review branch
[x] README file
[x] Boiler plate of the project 
[x] Create the static data to develop the client side without consuming API requests
[ ] Hook the event handlers to send query to the server instead of static data
