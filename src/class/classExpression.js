//unamed
var Andreas = class{
    constructor(first, last){
        this.first = first
        this.last = last
    }
}
//Using name property, the output will the name of class, if it uname
//Var will be assign to it
console.log(Andreas.name) // Out put = Andreas
//named
var Andreas = class Andreas2{
    constructor(first, last){
        this.first = first
        this.last = last
    }
}
console.log(Andreas.name) //Andreas2
