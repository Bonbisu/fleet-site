import { Page } from "./framework/page.js";
import { GoogleMap } from "./ui/google-map.js";
import { Button } from "./ui/button.js";
import { application } from "./app.js";

export class MapPage extends Page {

    constructor() {
        super('Map');
    }

    createElement() {
        super.createElement();

        let centerOfMap = {lat: 40.783661, lng: -73.965883};
        let map = new GoogleMap(centerOfMap, null);
        map.appendToElement(this.element);
        
        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('View Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => { 
            map = new GoogleMap(centerOfMap, application.dataService.drones);
            map.appendToElement(this.element);
        });
        
        b = new Button('View Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => { 
            map = new GoogleMap(centerOfMap, application.dataService.cars);
            map.appendToElement(this.element);
        });
    }

    mapCars() {
        return 'cars'
    }

    getElementString() {
        return '<div style="margin: 20px; text-align: center;"><h3>Map</h3></div>';
    }

}