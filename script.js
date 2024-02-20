'use strict';

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
   }
}

class Flat {
    constructor() {
        this.residents = [];
    }
    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }
    addFlat(flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat);
        } else {
            console.log("The maximum number of apartments has already been reached.");
        }
    }    
}

const person1 = new Person("Oleksiy", "male");
const person2 = new Person("Mariya", "female");
const person3 = new Person("Nikolay", "male");

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);

const house = new House(2);

house.addFlat(flat1);
house.addFlat(flat2);

console.log(house);