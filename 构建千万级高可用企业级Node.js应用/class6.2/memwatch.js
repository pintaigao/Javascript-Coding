const memwatch = require('node-memwatch');
memwatch.gc();
const hd = new memwatch.HeapDiff();

class MemoryLeakClass {
    constructor(){
      this.boom = new ArrayBuffer(1000000)  
    }
  }
  
const unCollected = {}

const timer = setInterval(() => {
    unCollected[Date.now()] = new MemoryLeakClass()
}, 1000)

setTimeout(()=>{
    clearInterval(timer);
    const hde = hd.end();
    console.log(JSON.stringify(hde, null, 2));
},10000);