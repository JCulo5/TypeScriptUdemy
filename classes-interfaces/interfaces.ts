interface Authenticatable{
    email: string;
    password: string;

    login():void;
    logout():void;
}

let user:Authenticatable;

user={
    email:"test@example.com",
    password:"password123",
    login(){
        //reach to database
    },
    logout(){ 
        //end session
    }
}
