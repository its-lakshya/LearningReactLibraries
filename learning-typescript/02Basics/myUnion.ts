let score :string | number = 33

score = 'lakshya'
score = 11

type User1 = {
    name:string, 
    id:number, 
}

type Admin = {
    userName : string, 
    id:number
}

let hitesh: User1|Admin = {name:'hitesh', id:23}

let lakshya : User1 | Admin = {userName:'lakshya', id:12}


function getId (id:number | string) {
    // console.log(`this is ${id}`)
    if(typeof id=== 'string'){
        id.toLowerCase()
        // id+2
    }
    else{
        id+2
    }
}

getId(3)
getId('3')

const data1 : number[] =[1,2,3]
const data2 : string[] =['1','2','3']
const data3 :string[] | number[] = [1, 2, 3]
const data4 :string[] | number[] = ['1', '2', '3']
const data5: (string | number)[] = [1, 2, '3']


let seatAllotment : 'aisle' | 'middle' | 'window'

seatAllotment = 'middle'

// seatAllotment = 'crew' // this will give error


