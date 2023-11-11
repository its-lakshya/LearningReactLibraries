const score: Array <number> =[]
const names:string[]= []

function indentityOne(val:boolean | number): boolean | number {
    return val
}

function indentityTwo(val: any ):any {
    return val
}

function indentityThree<Type>(val:Type):Type{
    return val
}

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string, 
    type:number, 
}

identityFour<Bottle>({
    brand:'lakshya',
    type:4
})

function getSearchProducts<T>(products:T[]):T{
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products:T[]):T => {
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection:string, 
    username:string, 
    password:string,
}

function anotherFunction <T,U extends Database>(valOne:T, valTwo:U):object{
    return {
        valOne, 
        valTwo, 
}
}

anotherFunction(3, {connection:'yes', username:'lakshya', password:"1234"})

interface Quiz{
    name:string, 
    type:string, 
}

interface course{
    name:string, 
    author:string, 
    subject:string,
}

class sellable<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}