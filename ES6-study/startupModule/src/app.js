import $ from "jquery";
import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { Button } from "./ui/button.js";
import { Image } from "./ui/image.js";
import { TitleBar } from "./ui/title-bar.js";
import { DataTable } from "./ui/data-table.js";
import { GoogleMap } from "./ui/google-map.js";

// access 'database'
let dataService = new FleetDataService();
dataService.loadData(fleet);

// ######### managing the DOM  ##########

// title bar and menu links
let tb = new TitleBar('Our Application');
tb.addLink('Home', '');
tb.addLink('Cars', '');
tb.addLink('Drones', '');
tb.addLink('Map', '');
tb.appendToElement($('body'));

// image
let i = new Image('../images/drone.jpg');
i.appendToElement($('body'));

// table
let headers = 'License Base Model AirTime'.split(' ');
let dt = new DataTable(headers, dataService.drones);
dt.appendToElement($('body'));

// button
let b = new Button('Click Me');
b.appendToElement($('body'));

// google map
let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.drones);
map.appendToElement($('body'));

