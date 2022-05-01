const heapdump = require('heapdump');



class MemoryLeakClass {
    constructor(){
      this.boom = new ArrayBuffer(1000000)  
    }
  }
  
const unCollected = {}

const timer = setInterval(() => {
    unCollected[Date.now()] = new MemoryLeakClass()
}, 1000)

const timer2 = setInterval(() => {
  let filename = './' + Date.now() + '.heapsnapshot'
  heapdump.writeSnapshot(filename, function(a, b){
    console.log('write filename', filename);
  });
}, 2000);


setTimeout(()=>{
    clearInterval(timer);
    clearInterval(timer2);
},10000);