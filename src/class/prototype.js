//Prototype Method
class Cube{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    // Getter
    get area(){
        return this.calcArea()
    }

 
    //Method
    calcArea(){
        return this.width * this.height
    }
}

let areaCube =  new Cube(30,30)
console.log(areaCube.area) // Result = 900