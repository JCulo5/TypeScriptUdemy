let names: Array<string>=['Max','Manu'];

type DataStore<T>={
    [key: string]: T;
};

let store: DataStore<string | boolean>={};
store.name='Max';
store.isInsturctor= true;


function merge<T>(a: T,b: T){
    return [a,b];
}

const ids=merge<number>(1,2);
const bds=merge<string>('hello','world');

console.log(ids);
console.log(bds);

function mergeObj<T extends object>(a:T,b:T){
    return {...a,...b};
}
const mergedObj=mergeObj({name:2},{age:30});
console.log(mergedObj);

class User<T>{
    constructor(public id:T){}
}

const user =new User('i1');
user.id;