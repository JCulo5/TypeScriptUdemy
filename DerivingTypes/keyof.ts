type User={name:string;age:number;isAdmin:boolean};
type UserKeys=keyof User; // 'name' | 'age' | 'isAdmin'

let validKey:UserKeys;
validKey='name';

function getProp<T, K extends keyof T>(obj: T, key: K){
    const val=obj[key];
    if(val===undefined || val===null){
        throw new Error('No value found');
    } 
    return val;
}
// validKey='invalid'; // Error 
const data={id:1,isStored:false,values:[1,2,3]};
const isStored=getProp(data,'isStored');

const user={name:'Max',age:30,isAdmin:true};
const val = getProp(user,'age');