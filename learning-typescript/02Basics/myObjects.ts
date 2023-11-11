const user = {
    name:'lakshya',
    email:'wer@gmailcom',
    isActive:true,
}

function createUser({name:string, isPaid:boolean}){}

createUser({name:'lakshya', isPaid:false})

// function createCourse():{}{
//     return{}
// }

function createCourse():{name:string, price:number}{
    return {name:'reactjs', price:499}
}

type user = {
    name:string,
    email:string,
    isActive:boolean,
}

function createUser2(user: user):user{
    return {name:'', email:'', isActive:false}
}

createUser2({name:'lakshya', email:'', isActive:false})


type user2={
    readonly _id:string
    name:string,
    email:string, 
    isActive:boolean, 
    creditCardDetails?:number
}

let myUser:user2 = {
    _id:'123',
    name:'lakshya',
    email:"l2l@gmail.com",
    isActive:true,    
}

myUser.email = "k2k@gmail.com";
// myUser._id='34'


type cardNumber= {
    cardnumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

export {}