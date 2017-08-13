# Code For Home Assignment

## How To Run

	npm install webpack -g
	npm install webpack-dev-server -g
	npm install
	webpack-dev-server --progress -colors
	
This will be running a webpack testing server at port 8080. Use browser to access:

	http://localhost:8080/webpack-dev-server/

* First click reload, you will get a new cards deck which is not shuffled yet. 
* Then click shuffle button to shuffle the cards
* Then click deal one card, to deal one card each time. When all of the cards are dealt, you will get message to ask you to reload and shuffle the cards
* If just reload and not shuffle the cards, you will get the card in sequence when click deal one card button.

## Technical Details

* Card.js is the module files including class Card and CardsDeck. CardsDeck has the method _shuffle()_ and _dealOneCard()_ required for the home assignment
* playground.js is the javascript file to test the result
* entry.js is the packing javascript file to assemble every thing together

## Credit

* Continously improvement: So far the code can fit the requirement of the home assignment. I would not introduce more complexity to avoid over-engineering. As in real project, based on the coming requirements, I will always take time to review the existing code and do the continously improvement by refactoring
* ES6: I have used some ES6 in the code, including **class**, **let** keyword, mutiple variables assignment and string templates.
* Webpack: The whole code is organized and compiled by webpack
* Lodash: So far, I didn't find the place suitable to use loadash. loadash may be used for the manipulating of the array to improve the performance(though for 52 cards, perforamnce would not be the problem).
* Use Redux to react the user action, update the deck and show the value