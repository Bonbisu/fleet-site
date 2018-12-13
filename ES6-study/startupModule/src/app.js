import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";

/* 
Every class needs to be in this own file

we have to import every class we want to use

In this case we dont import Vehicle, so we can't instantiate it

*/

let c = new Car();
let d = new Drone();

console.log(c);
console.log(d);

