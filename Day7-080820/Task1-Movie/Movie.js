class Movie
{
    constructor(title, studio, rating="PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies)
    {
        return movies.filter((movie)=> movie.rating === "PG");
    }
}

var m1=new Movie("Robot", "AVM", "PG");
var m2 = new Movie("Bigil", "OSCAR", "PG13");
var m3= new Movie("Asal", "Vendahrmovies", "R");
var m4 = new Movie("CasinoRoyale", "EON Productions", "PG13")
var m5 = new Movie("Commando", "Fox");

console.log("Moovies with Rting PG are:")
console.log((m3.getPG([m1,m2,m3,m4,m5])).map((e)=>e.title).join(", "))

