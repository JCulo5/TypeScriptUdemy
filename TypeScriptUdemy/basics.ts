// let userName:string;
// userName="John Doe";

// let age:number;
// age=30;
// let userAge=40; //automatic type inference

// function add(a:number, b:number){
//     return a+b;
// }

function add(a=2, b=5){
    return a+b;
}
console.log(add());
console.log(add(7,14));