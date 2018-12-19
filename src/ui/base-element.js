import $ from 'jquery';

export class BaseElement {

    constructor() {
        this.element = null; // jQuery object
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element); // $(`${el}`) formmating as jquery
        this.enableJS();
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s); // jquery function
    }

    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]); // mdl funtion that allows JS (/wo this, it don't recognize that we create an Material elemente)
    }
}