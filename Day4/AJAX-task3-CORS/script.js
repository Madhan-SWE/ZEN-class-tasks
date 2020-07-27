// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://cors-anywhere.herokuapp.com/api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
console.log("CORS Issue solved by using thrid party proxy cors-anywhere.com");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
fetch(url_string).then(res=>res.json()).then(data=>console.log(data));