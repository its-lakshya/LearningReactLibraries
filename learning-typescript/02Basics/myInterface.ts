interface User {
    readonly dbId:number, 
    email:string,
    userId:number, 
    googleId?:string,
    // startTrial:()=> string
    startTrial():string
    getCoupon(couponname:string, value:number):number
}

interface User { 
    github:string
}

interface Admin extends User{
    role:'admin' | 'ta' | 'learner'
}

const lakshya:User = {dbId:22, email:'lk@gmail.com', userId:2233, github:"@lsk", startTrial:()=>{
    return "trail started"
}, getCoupon:(name:'laksh', off:10)=> {
    return 4455
}}
lakshya.userId=4455

const LK:Admin = {dbId:22, email:'lk@gmail.com', userId:2233, github:"@lsk", role:"admin", startTrial:()=>{
    return "trail started"
}, getCoupon:(name:'laksh', off:10)=> {
    return 4455
}}


export{}