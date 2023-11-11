abstract class TakePhoto2{
    constructor(
        public camaraMode:string, 
        public filter:string,
    ){
    }
    abstract  getSepia():void 
    getReelTime():number{
        return 8
    }
}

// const laksh = new TakePhoto('text', 'test')

class Instagram2 extends TakePhoto2{
    constructor(
        public camaraMode:string,
        public filter:string, 
        public burst: number
    ){
        super(camaraMode, filter)
    }

    getSepia():void{
        console.log('sepia')
    }
}