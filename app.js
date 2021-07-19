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
console.log(othersCitiesId);


// Classe Trip

class Trip {
    constructor(id, name, imageUrl, price) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    //Je renvoi mon toString
    toString() {
        return this.id + ' ' + this.name + ' ' + this.imageUrl + ' ' + this.price
    }

    // Setter sur la variable this._id de l'attribut id
    set id(monId) {
        this._id = monId
    }

    // Getter sur la variable this._id de l'attribut id
    get id() {
        return this._id
    }

    // Setter sur la variable this._name de l'attribut name
    set name(monName) {
        this._name = monName
    }

    // Getter sur la variable this._name de l'attribut name
    get name() {
        return this._name
    }

    // Setter sur la variable this._imageUrl de l'attribut imageUrl
    set imageUrl(monImageUrl) {
        this._imageUrl = monImageUrl
    }

    // Getter sur la variable this._imageUrl de l'attribut imageUrl
    get imageUrl() {
        return this._imageUrl
    }

    // Setter sur la variable this._pricede l'attribut price
    set price(monPrice) {
        this._price = monPrice
    }

    // Getter sur la variable this._price de l'attribut price
    get price() {
        return this._price
    }

    // Ajouter une methode getDefaultTrip
    static getDefaultTrip() {

        return {
            id: 'rio-de-Janeiro',
            name: 'Rio de Janeiro',
            imageUrl: 'img/rio-de-janeiro.jpg',
        }
    }

}

//creation d'un objet parisTrip

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg', 100)

console.log(parisTrip);

//avec l'ajout de la methode toString()

console.log(parisTrip.toString());


//Constante utilisant la methode getDefaultTrip de la classe 

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

// Heritage 

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = 0;
    }

}

//creation de la constante de la nouvelle classe qui herite de la clase mere 
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')

console.log(freeTrip.toString());