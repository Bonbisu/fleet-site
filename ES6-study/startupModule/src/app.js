class Vehicle {
    constructor(licenceNum) {
        this.licenceNum = licenceNum;
    }
    start() {
        console.log('starting Vehicle ' + this.licenceNum); // main start method
    }
    static getCompanyName() {
        console.log('My Company');
        
    }
}

class Car extends Vehicle {
    constructor(licenceNum) {
        super(licenceNum);
    }
    start() {
        console.log('starting Car ' + this.licenceNum); // overrides Vehicle.start()
        super.start(); // will call Vehicle.start() after (can be placed anywhere) the inherit overrided method        
    }
    static getCompanyName() { // if call Car.getCompanyName, will return My Other Company, because this static method overrides Vehicle method
        super.getCompanyName(); // calls Vehicle.getCompanyName before Car.getCompanyName
        console.log('My Other Company');
        
    }
}

let c = new Car('A123');

c.start();


Car.getCompanyName(); // because Car is a Vehicle, will return what expected

c.getCompanyName(); // cant call, only belongs Vehicle and Car, not instances of classes
