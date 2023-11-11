"use strict";
console.log('typscript is live');
console.log('typscript is live');
// class User {
//     public email:string
//     private name:string
//     // #name:string   // # and private both are same # is in javascript while private with # is in typscript
//     readonly city:string = ''
//     constructor(email:string, name:string){
//         this.email = email
//         this.name = name
//         // this.#name = name
//         this.city
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._courseCount2 = 2;
        // #name:string   // # and private both are same # is in javascript while private with # is in typscript
        this.city = '';
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
//above user and below user both are same below is just syntactic sugur given by typescript to us 
const lakshya = new User('laks@gmail.com', "lakshya ");
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCouseCount() {
        // this._courseCount = 4 // is not accessible here because _courseCount is a private property
        this._courseCount2 = 5;
    }
}
