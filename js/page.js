var page, $, $$, router;

$(function() {
	//Create a page object, this will store our whole page.
	page = {};

	//Create the page with Twitter Bootstrap
	page.container = $$({}, '<div class="container" />');
	$$.document.append(page.container);

	//This text will change based up-on our route
	page.myText = $$({text:'Hello World'}, '<h1 data-bind="text" />');
	page.container.append(page.myText);

	page.inputText = $$({text:'Input some text'}, '<h5 data-bind="text" />');
	page.container.append(page.inputText);

	page.input = $$({text:'',placeholder:'something here'}, '<input type="text" data-bind="text,placeholder=placeholder" />');
	page.container.append(page.input);

	//We use router.navigate only, all logic is in route.js
	//So the only thing in this should be router.navigate(...)
	page.button = $$({text:'Click me'}, '<div class="btn btn-primary" data-bind="text" />', {
		'click &': function() {
			//Go to route.js from here.
			router.navigate('/setText/' + page.input.model.get('text'));
		}
	});
	page.container.append(page.button);
});
