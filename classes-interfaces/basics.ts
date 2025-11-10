class User {
    // name:string;
    // age:number;

    // constructor(name:string, age:number){
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(public name:string, public age:number, public hobbies:string[]){}

    greet(){
        console.log("my age is "+ this.age);
    }
}

const max=new User("Jakov", 30, ["Sports", "Cooking","Padel"]);
console.log(max);
max.greet();