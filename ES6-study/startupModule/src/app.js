class Drone {
    constructor(id, name) {
        console.log('in Drone constructor'); // log the message when instantiated
        console.log('id: ' + id); // log the attribute id passed when instantiated
        console.log(Date() + ' - ' + id + ' ' + name );   
    }
}

let drone = new Drone('A123', 'Flyer');

