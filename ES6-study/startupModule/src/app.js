class Vehicle {
    constructor() {
        this.gpsEnabled = true; // instance property in abstract class, not static
    }
}

class Drone extends Vehicle {
    
}

class Car extends Vehicle {
    constructor() {
        super();
        this.gpsEnabled = false; // overrides Vehicle property
    }
}

let c = new Car();

console.log(c.gpsEnabled);
