/*
sources:
https://javascript.info/xmlhttprequest
https://xhr.spec.whatwg.org/
*/


function response_handling_method()
{
    if (this.readyState === 4)
    {
    	if(this.status === 200)
    	{
    		console.log("Request successful");
    		console.log("status code:", this.status);
    		console.log("Response:", JSON.parse(this.response));
    	}
    	else
    	{
    		console.log("Invalid status code");
    		console.log("status code:",this.status)
    	}
    }

}

function error_handler_method()
{
    console.log("Error on XHR request");
}
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=9069688a96d60b45c00135f76c6433d8';

// Adding handler for the response
request.onload = response_handling_method;
request.onerror = error_handler_method;


// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true);
request.send();


