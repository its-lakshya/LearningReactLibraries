"use strict";
class Instagram {
    constructor(camaraMode, filter, burst) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(camaraMode, filter, burst, shorts) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log('story was created');
    }
}
