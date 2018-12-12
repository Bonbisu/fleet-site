class Drone {
    constructor(id, name) {
        // instance variables/properties with this keyword
        this.id = id;
        this.name = name;
        // class variables/properties
    }
}

let drone = new Drone('A123', 'Flyer');

// now the instance properties are accessible
console.log('drone: ' + drone['id'] + ' ' + drone.name); // two possible notation to access properties 

let drone2 = new Drone('B456', 'Twirl');

console.log(drone.id + ' ' + drone2.id); // each Drone instance has it own properties set



