# Basic jQuery slideshow plugin

This jQuery plugin creates a slideshow for images and HTML content.

## Usage / Installation

Usage of this slideshow plugin entails the usual process:

1. create the HTML markup
2. add the JavaScript / jQuery refs
3. initialize the plugin with any available options
4. style the markup with CSS as desired.

### HTML

The HTML markup must have a containing parent element, which can use any ID or class for initialization.

The parent element must contain an element with a "slides" class and optionally an element with a "controls" class.  

The "slides" element will contain as many "slide" elements as desired, which will contain the slide image and content.

The "controls" element will contain the same number of "control" elements to match the number of "slide" elements.  The slide will display when the matching "control" element is clicked.

Optionally, an "active" class can be added to the "slide" element that should be shown on page load.  Otherwise, the first slide will be visible.

An example of the slideshow markup is shown below:

```html
<div id="my_slideshow">
	<div class="slides">
		<a href="#" class="slide active"><img src="images/sample_image_1.jpg" alt="" /></a>
		<a href="#" class="slide"><img src="images/sample_image_2.jpg" alt="" /></a>
		<a href="#" class="slide"><img src="images/sample_image_3.jpg" alt="" /></a>
		<a href="#" class="slide"><img src="images/sample_image_4.jpg" alt="" /></a>
		<a href="#" class="slide"><img src="images/sample_image_5.jpg" alt="" /></a>
	</div>
	<div class="controls">
		<a href="#" class="control active">1</a>
		<a href="#" class="control">2</a>
		<a href="#" class="control">3</a>
		<a href="#" class="control">4</a>
	</div>
</div>
```

### JavaScript / jQuery
Since this plugin utilizes jQuery, we must call it before we can initialize the plugin.  Typically, jQuery will go in the <HEAD> of your HTML document.  You can use a self-hosted copy of it or use one of several CDN hosted versions.  

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- CDN-hosted -->
```

*- OR -*
```html
<script src="js/jquery-1.11.3.min.js"></script>
<!-- path to your JS folder -->
```
Anywhere under the jQuery ref, add the ref to the plugin.  This can be added in the `<HEAD>` section or anywhere in the `<BODY>` of the document.

```html
<script src="js/slideshow.js"></script>
<!-- path to your JS folder -->
```

### Initialize the plugin
Initialize the plugin with the selector of the parent element.

```javascript
<script type="text/javascript">
/* define $ as jQuery just in case */
( function( $ )
{
	/* doc ready */
	$( function( )
	{
		$( '#my_slideshow' ).slideshow( );
	});
})( jQuery );
</script>
```

### Style the plugin with CSS
The demo pages have some basic CSS to add some structure to the page, which can be seen here: http://demo.dockstreetmedia.com/slideshow/css/main.css.  Some of the demos also have some styling for the slideshow, which can be seen here: http://demo.dockstreetmedia.com/slideshow/css/slideshow.css.

You can modify or add your own CSS to match your own preferences.

<strong>NOTE</strong>: the CSS should work for all modern browsers (Chrome, Firefox, Safari, etc.) and Internet Explorer 8 and later.  IE 7 and older, things fall apart.  However, if you are still using IE 7, then I'm sorry, but that's your fault.

## Demos

The demos index can be viewed here:

* http://demo.dockstreetmedia.com/slideshow/index.html.  

View the source to see how each tab module was initialized and styled.  

## Learn / Adopt / Fork
The entirety of the plugin is included in this repository, including the demo section.  You can easily view all of the code in order to learn more about it.  I try to use clear commenting to explain the code.

Also, feel free to adopt and adapt to make it your own.  If you like, fork it and send over a pull request.  Add or solve existing issues.  It is open-source, after all.
