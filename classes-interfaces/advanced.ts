class User{
private _firstName:string="";
private _lastName:string="";

    //constructor(private firstName:string,private lastName:string){}
    set firstName(name:string){
        this._firstName=name;
    }
    set lastName(name:string){
        this._lastName=name;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    static eid="USER";
}
console.log(User.eid);
const max=new User();
max.firstName="Jakov";
max.lastName="Kurtovic";
console.log(max.fullName);

class Employee extends User{
    constructor(public jobTitle:string){
        super();
    }
}

abstract class UIElement{
    constructor(public identifier:string){}

    // clone(targetLocation:string):{
    // //do something
    // }
}
class Button extends UIElement{}