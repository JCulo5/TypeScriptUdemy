function add2(a:number,b:number):number{
    return a+b;
}

function log(message:string):void{
    console.log(message);
}

log("patlka");

function logAndThrow(errorMessage:string):never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}

let loga=logAndThrow("Error occurred");
console.log(loga);

function performJob(cb: (m:string) => void): void {
    cb("Job finished");
}

performJob(log);

type User2={
    name:string,
    age:number,
    greet: ()=>string;
};

let user3:User2={
    name:"John",
    age:30,
    greet: () => {
        return ("Hello, Patka");
    }
};
