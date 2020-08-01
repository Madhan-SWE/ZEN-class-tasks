Window Object, Document object and Screen Object:
==================================
    window object:
    =============
	Window is javascript root object or global object of the javascript. Which actually refers to the browser window.
	Window object is the first thing that gets loaded in the browser. Each browser tab has its own window object.
	It is a Javascript root object or it is a 
	global object.

	Whereas document object refers to the web documents like html or php that gets loaded in the browser window.
	A browser window can have multiple iframes. Each Iframe inside a web page can have its own window object and its own
	document object. 

	Each Iframe inside a browser window is a property of browser window or root window object.
	Windows of a frame in a browser window can be accessed as below.

	Example:
	========
	    for (i = 0; i < frames.length; i++)
	    {
	        frames[i].window.length;
	    }

    few properties of window object: closed, console, frames, history, innerheight

    Document object:
    ================
    When a html document is loaded inside a window, it becomes the document object. Document object is the root node
    of the HTML document. Contains the properties of the document loaded inside a browser window.

    Document object is used to get or manipulate the HTML DOM tree.

    Example:
    ========
        console.log(document.baseURI)
        document.body.style.backgroundColor = "yellow";
        console.log(document.body.innerHTML);



    Screen object:
    ==============
    Screen object refers to the user's display. Having properties like width, height, pixelDepth, etc.
    It just contains information about the browser screen. 
