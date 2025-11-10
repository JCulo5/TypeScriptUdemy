"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
const max = new User("Jakov", "Milutinovic");
console.log(max.fullName);
//# sourceMappingURL=advanced.js.map