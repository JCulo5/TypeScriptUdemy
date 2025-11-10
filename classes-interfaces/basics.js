"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    hobbies;
    // name:string;
    // age:number;
    // constructor(name:string, age:number){
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    greet() {
        console.log("my age is " + this.age);
    }
}
const max = new User("Jakov", 30, ["Sports", "Cooking", "Padel"]);
console.log(max);
max.greet();
//# sourceMappingURL=basics.js.map