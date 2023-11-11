"use strict";
const score = [];
const names = [];
function indentityOne(val) {
    return val;
}
function indentityTwo(val) {
    return val;
}
function indentityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({
    brand: 'lakshya',
    type: 4
});
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, { connection: 'yes', username: 'lakshya', password: "1234" });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
