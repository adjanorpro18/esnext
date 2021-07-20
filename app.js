//Creation de variable cle let

let favoriteCityId = "rome"

console.log(favoriteCityId); //

//Affectation d'une nouvelle valeur à la variable favoriteCityId 

favoriteCityId = "paris"
console.log(favoriteCityId);


//Creation d'une constante avec le mot cle const

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]

console.log(citiesId);

//Affectation d'une valeur para exemple tableau vide à la const CitiesId
//citiesId = [];
citiesId.push("Tokyo");
console.log(citiesId);

//Creation d'objet 

function getWeather(cityId) {

    let city = cityId;
    let temperature = 20;

    return {
        city: city.toUpperCase(),
        temperature: temperature
    }
}

//Creation dela constante

const weather = getWeather(favoriteCityId);
console.log(weather);



// Affectation destructurée

const {
    city,
    temperature
} = weather;

console.log(city);
console.log(temperature);


//Rest operator

const [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

const classes = require("./classes"); // pour utiliser les données des classes 


// Classe Trip
//creation d'un objet parisTrip

let parisTrip = new classes.Trip('paris', 'Paris', 'img/paris.jpg')

console.log(parisTrip.toString());
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString()); //avec l'ajout de la methode toString()


//Constante utilisant la methode getDefaultTrip de la classe 

const defaultTrip = classes.Trip.getDefaultTrip();

console.log(defaultTrip.toString());


// Heritage 
//creation de la constante de la nouvelle classe qui herite de la clase mere 

const freeTrip = new classes.FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')

console.log(freeTrip.toString());


//Promise

//Pour afficher les instance de  service TripService et PriceService

let tripService = new classes.TripService();
console.log(tripService);


// recherche par nom de voyage avec la valeur Toulouse

let tripName = "Paris";
let tripCourant = "Paris";

tripService.findByName(tripName)
    .then(trip => {
        tripCourant = trip;
        console.log(`Trip found ${tripName}`);
    })
    .catch(err =>
        console.log(`No trip with name ${tripName}`));

// pour recuperer  le prix du voyage de Rio de Janeiro

let priceService = new classes.PriceService();
console.log(priceService);


let tripId = "rio-de-janeiro";

priceService.findPriceByTripId(tripId)
    .then(price => {
        prixCourant = price;
        console.log(`Price found ${price}`);
    }).catch(err => console.log(`No price found for id ${trip.id}`));