function addTwo(num: number):number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name:string, email:string, isPaid:boolean = false){

}

const hero = ['thor', 'spiderman', 'loki']
// const hero = [1,2,3,]

hero.map((hero):string => {
    return `hero id ${hero}`
})


function consoleError(errmsg: string) : void{
    console.log(errmsg)
}

function handleError(errmsg: string) : never{
    throw new Error(errmsg)
}
addTwo(5);
getUpper("lakshya");
signUpUser("lakshya", "er@gmail.com", false);
loginUser("kartik", 'er@gmail.com')

export {};
