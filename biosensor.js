let getRandomArbitrary = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

// Creating a generic biosensor class 
class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
        this.currentHearBeat=0;
        this.config={
            minHR:60,
            maxHR:80
        }
    }

    display(){
        console.log('Person:'+this.name+" heartbeat = "+this.currentHearBeat);
    }

    heartBeat(){
        this.currentHearBeat=getRandomArbitrary(this.config.minHR,this.config.maxHR);
        this.display()
    }

    //Activate all the living biofunctions
    live(){
        console.log("IT'S ALIVEEE!")
        setInterval(()=>{this.heartBeat()},1000)
    }
}

let Andrea = new Biosensor('Andrea')
let James = new Biosensor('James')