let hobbies=['Sports','Cooking'];
hobbies.push("Reading");

let users: string[];
let user:(string | number)[];
let patke:Array<string | number>;

users=['John','Jane','Doe'];
user=[1,'Alice',3,'Bob'];

let possibleResults: [number, number];
possibleResults=[10,20];

let lik:{
    name:string,
    age:number
};  

let val:{}='text';

let data: Record<string, number>;
data={
    'apple': 5,
    'banana': 10
};


Object.entries(data).forEach(([key, value]) => {
    console.log(key, value);
});
