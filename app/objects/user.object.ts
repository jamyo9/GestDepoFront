
export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;    
}

export class User {
    userId: number;
    userName: string;
    password: string;
    name: string;
    phone: string;
    email: string; 
    address = new Address();

    /*
    constructor(_userName: string, _password: string) {
        this.userName = _userName;
        this.password = _password;
    }
    */
}