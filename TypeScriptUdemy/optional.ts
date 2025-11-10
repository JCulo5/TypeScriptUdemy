function generateError(msg?:string){  //opcionalni parametar
    throw new Error(msg);
}
generateError();
generateError("An error occurred");

type User4={
    name: string;
    age: number;
    role?: 'admin' | 'editor' | 'guest'; //opcionalno svojstvo
};

let input= null;
const didProvideInput=input ?? false; 