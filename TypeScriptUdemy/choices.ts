// let userRole=0;

// enum Role{
//     ADMIN,
//     EDITOR,
//     GUEST,
// }

// let uloga:Role=Role.ADMIN;

type Role='admin'| 'editor' | 'guest';
type User={
    name:string,
    age:number,
    role:Role,
    permissions: string[];
}

let usrRole: 'admin'| 'editor' | 'guest'='admin';

let possibleResults1: [1 | -1, number];
possibleResults1=[1,1];

function access(role:Role){

}