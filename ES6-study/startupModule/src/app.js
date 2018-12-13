class Vehicle {
    constructor(licenceNum) {
        // all Vehicle needs a licence
        this.licenceNum = licenceNum;
    }
}

class Drone extends Vehicle {
    
}

class Car extends Vehicle {
    constructor(licenceNum) {
        // always call super() on derived class constructor
        super(licenceNum); // without , Vehicle constructor will collapse with Car constructor(error)
    }
}

let c = new Car('A123');
// pass a licence number to Car, and Car will pass to Vehicle unsing the super();

console.log(c.licenceNum);
