"use strict";
class TakePhoto2 {
    constructor(camaraMode, filter) {
        this.camaraMode = camaraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
// const laksh = new TakePhoto('text', 'test')
class Instagram2 extends TakePhoto2 {
    constructor(camaraMode, filter, burst) {
        super(camaraMode, filter);
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia');
    }
}
