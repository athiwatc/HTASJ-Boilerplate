HTASJ Boilerplate
=============

The easy boilerplate for the world.

What is HBASJ?
-------

HTASJ stands for Html5, Twitter Bootstrap, Agility.js, Samrou.js and jQuery.

How to use this boilerplate?
-------

Best thing is to go to page.js(Go to page.js first and it should guide you) and route.js this is the only two page that you need to take a look at and you will understand the logic behind it.

First you will have to understand how to program flows. We are never going to write any direct HTML into our .html pages.
We will model our components using Agility.js in page.js
So Agility.js produce HTML code(with Twitter Bootstrap).
On click or any action the Agility.js will call router.navigate('...')
Router is from Samrou, the logic will be run in Samrou's router.js only. There will be no logic in page.js or else the routing system will not work.

What does the flow looks like?
-------
Browser start the HTML page and load the library.
The page is called first and model the page. This needs to happen first or else router can't be called as it might execute a code imeditely because of the URL.
After Agility.js and Bootstrap does it magic route will be called.
Route will then start to look at the url from the start.

Start > Load page.js > Agility.js layout the page and set default and handle event to call route.js > Load route.js > (loop)route.js scans the URL for matching set > if match it calls the logic in route.js(you can have another file for this but I prefer it in here). > route.js uses page variable to change the element.

Things to remember!
-------
Agility.js WILL NEVER touch any HTML code after the start-up, all of this work belong to route.js