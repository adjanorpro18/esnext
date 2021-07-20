//classe Trip

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
            imageUrl: 'img/rio-de-janeiro.jpg'
        }
    }

}

exports.Trip = Trip;



//classe FreeTrip

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = 0;
    }

}

exports.FreeTrip = FreeTrip;


//classe TripService

class TripService {

    // Set of 3 trips
    constructor() {
        this.strips = new Set();
        this.strips.add('paris', 'Paris', 'img/paris.jpg');
        this.strips.add('nantes', 'Nantes', 'img/nantes.jpg');
        this.strips.add('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

    }


    //Une methode de retrouver les trip par nom

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout((trip, err) => {

                //code à exécuter de manière asynchrone

                trip = this.currentTrip(tripName)

                if (trip != undefined) {

                    resolve(trip); // en cas de success

                } else { // en cas rejet

                    reject(err);


                }

            }, 2000)
        });
    }

    // methode qui retourne le trip courant 

    currentTrip(name) {

        let tripCourant;

        this.strips.forEach(element => {
            if (element.name === name) {
                tripCourant = element;
            }
        });
        return tripCourant;
    }

}

exports.TripService = TripService;


//classe PriceService

class PriceService {
    constructor() {

        //  Map of 2 trips
        this.prices = new Map();
        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);

    }

    //Une methode de retrouver le prix des voyages par leur id

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout((price, err) => {
                // ici l'exécution du code est asynchrone

                price = this.currentPrice(tripId)

                if (price != undefined) {
                    resolve(price); // en cas de success
                } else {
                    reject(err); // en cas de rejet
                }
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        });
    }

    // methode qui retourne le prix du trip courant 

    currentPrice(tripId) {

        let prixCourant = null;

        for (let [id, price] of this.prices.entries()) {
            if (id == tripId) {
                prixCourant = price;
            }
        };
        return prixCourant;
    }
}
exports.PriceService = PriceService;