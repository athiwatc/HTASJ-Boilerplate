//Goto line 10 if you come from page.js and read the rest later on.

var router, $, Simrou;

$(function() {
	// Create a new Simrou instance
	router = new Simrou();

	// Register a route that matches all setText/XXX
	var text = router.registerRoute('/setText/:mytext');

	//When a setText is called with "get" this will get called.
	text.get(function(event, method, recieveText) {
		//This retrive the page element and change myText according to the URL
		page.myText.model.set({text:recieveText});
	});

	//Start with '/home', we don't have this route so this does nothing.
	router.start('/home');
});
