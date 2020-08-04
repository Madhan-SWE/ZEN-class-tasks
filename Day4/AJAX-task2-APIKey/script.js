// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=9068469688a9fdbd6d60b45c00135f76c6433d8';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log("Bangalore city weather by city name: ")
console.log(data);
}

var request2 = new XMLHttpRequest()
var url_string2 = "https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=9069688a96d609877b45c00135f76c6433wefd8";
request2.open('GET',url_string2, true);
request2.send();
request2.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log("Chennai city weather by city id: ")
console.log(data);
}

/*fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/