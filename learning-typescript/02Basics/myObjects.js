"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'lakshya',
    email: 'wer@gmailcom',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'lakshya', isPaid: false });
// function createCourse():{}{
//     return{}
// }
function createCourse() {
    return { name: 'reactjs', price: 499 };
}
function createUser2(user) {
    return { name: '', email: '', isActive: false };
}
createUser2({ name: 'lakshya', email: '', isActive: false });
var myUser = {
    _id: '123',
    name: 'lakshya',
    email: "l2l@gmail.com",
    isActive: true,
};
myUser.email = "k2k@gmail.com";
