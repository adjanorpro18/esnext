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