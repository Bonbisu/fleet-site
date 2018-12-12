class Drone {
    constructor(id) {
        this._id = id; // '_id' is a private variable by convention
    }
    
    get id() { // without the 'get' will need to use parenteses to call : drone.id()
        return this._id; // now the getter will return the correct id just passin drone.id
    }
    
    set id(value) {
        this._id = value; // set a new value to _id        
    }
}


let drone = new Drone('A123');

// setting a new value with setter
drone.id = 'B456';

// '_id' can be accessed by drone._id but is not common
console.log('drone id: ' + drone.id ); // return undefined because the var are called '_id'



