"use strict";
//Narrowing 
// Type Guard
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
    }
    id === null || id === void 0 ? void 0 : id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius;
    }
    else if (shape.kind === 'square') {
        return shape.side * shape.side;
    }
    return shape.length * shape.width;
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
