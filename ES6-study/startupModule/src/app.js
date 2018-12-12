class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static getCompany() {
        // create a static method for Drone class
        console.log('in getCompany');

        console.log(this.id); //  can't access instance properties
        
        
    }

    fly() {
        // create a method for Drone instances (is like functions)
        console.log('Drone ' + this.id + ' is flying to the moon'); // when working with instance of class, alway have to use 'this' keyword
        
    }
}


let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');

drone.fly(); // call a method
drone2.fly();

Drone.getCompany(); // call a static method

drone.getCompany(); // is not accessible throug instances: trows ans error

