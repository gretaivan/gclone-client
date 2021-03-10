# Gclone Client

## Installation & Usage

### Installation
* ```npm install``` to install dependencies 

### Usage
* ```npm run dev``` to run 
* ```npm test``` to run the tests

## Changelog

### index.html
- [x] added form with search bar and 2 buttons 

### index.js
- [x] refactored to reduce uneeded code by creating the target elements and listeners for them


### listeners.js
- [x] added the event listener and handler for button search
- [x] added the event listener and handler for feeling lucky
- [x] fixed the query formating that send request to the server
- [x] refactored event handlers to include smaller reusable functions
- [x] function to get the result data
- [x] function to create the result list
- [x] function to create the formated one result sample and append it to the view
- [x] cleanup of the file

### data.js
- [x] static file 


## Bugs
<<<<<<< HEAD
- [x] client sends incorrectly formatted keyword as aquery to the server
- [ ] content from old search needs to be destoryed on new search
- [ ] long load times - confusing - should tell user that query is running !
- [x] does not identify listeners
- [x] does not remove previous search results so new search results are not displayed
### layout bugs
- [ ] flex layout causes content to shift off left of screen on window resize
- [ ] flex flow causes unpleasant break up of content when search alligned to top of screen
=======



## TODO
### Functionality 
[x] upon search button pressing send request to the server with search keyword
[x] feeling lucky button: 
    [x] pass the keyword 
    [x] then generate random index for the search result
    [x] select and redirect to the result with randomIndex

### Design 
<<<<<<< HEAD
- [x] search area that hides
    - [] add logo
    - [x] x in search bar to clear content on click
- [x] style the buttons
- [x] format the output of the query
- [ ] responsive design!
- [ ] some issues with content width being more uniform
- [ ] footer
- [ ] add search info text between search bar and results like google has

### Other
- [x] Create review branch
- [x] README file
- [x] Boiler plate of the project 
- [x] Create the static data to develop the client side without consuming API requests
- [x] Hook the event handlers to send query to the server instead of static data
- [x] use function from server or add the logic to return only 10 results
=======
[] search area that hides
    [] add logo
    [] x in search bar to clear content on click
[] style the buttons
[] responsive design!
[] some issues with content width being more uniform
[] footer
[] target 
[] underline h3 header on hoevr
[] emphasise the keyword in paragraph

### Other
[x] Create review branch
[x] README file
[x] Boiler plate of the project 
[x] Create the static data to develop the client side without consuming API requests
[x] Hook the event handlers to send query to the server instead of static data
[x] use function from server or add the logic to return only 10 results

