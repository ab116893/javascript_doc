//unamed
var Andreas = class{
    constructor(first, last, age){
        this.first = first
        this.last = last
        this.age = age
    }
    age(){
        return this.age
    }
    
}
//Using name property, the output will the name of class, if it uname
//Var will be assign to it
console.log(Andreas.name) // Out put = Andreas
//named
var andre = new Andreas("Andreas", "Sudarto", 21)
console.log(andre.age)

var Andreas = class Andreas2{
    constructor(first, last){
        this.first = first
        this.last = last
    }
}
console.log(Andreas.name) //Andreas2


//Note: Class expressions also suffer from the same hoisting issues mentioned for Class declarations
