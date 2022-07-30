console.clear()


const events = require("events");
let evt=new events.EventEmitter();

const callback1=()=>console.log("this is callback 1");
const callback2=()=>console.log("this is callback 2");
const callback3=()=>console.log("this is callback 3");

evt.on("c1",callback1);
evt.on('c2',callback2);
evt.on('c3',callback3);

evt.emit('c3')
evt.emit('c2')
evt.emit('c1')


//  constructor function  -- function key word is must
function a(){
    let x=10;

    this.b=()=>{
        x++;
        console.log(x);
    }
}
let x=new a()
x.b()
