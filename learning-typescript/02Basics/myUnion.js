var score = 33;
score = 'lakshya';
score = 11;
var hitesh = { name: 'hitesh', id: 23 };
var lakshya = { userName: 'lakshya', id: 12 };
function getId(id) {
    // console.log(`this is ${id}`)
    if (typeof id === 'string') {
        id.toLowerCase();
        // id+2
    }
    else {
        id + 2;
    }
}
getId(3);
getId('3');
var data1 = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, 2, 3];
var data4 = ['1', '2', '3'];
var data5 = [1, 2, '3'];
var seatAllotment;
seatAllotment = 'middle';
// seatAllotment = 'crew' // this will give error
