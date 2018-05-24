
//Declare Class using import
class Animal {
    constructor(type, arm){
        this.type = type;
        this.arm = arm;
    }
    makeNoise(sound = 'Loud Noise'){
        console.log(sound)
    }
    static  return9() {
        return 10
    }
}
//Declare class normal way
class Andreas{
    constructor(first, last){
        this.first = first
        this.last = last
    }
}

//Hoisting
//This code will throw a reference error, to prevent it
// You will need to declare class then access it
var human = new Andreas() // reference error
// This is how you declare class
class Andreas{}


