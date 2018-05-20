//function to reverse
function reverse(string){
    return string.split("").reverse().join("")
}
//Reverse string using javascript normal way
reverse("hello")
//Reverse string using javascript using object
//Way Create object 1
var string = 10 + 9
var object = {
    hello : "hello world",
    hi : "hi world",
    hola : "hola world",
    reverse : reverse(hello),
    get : function (input){
        return input + this.hello + this.hola + `${string}`
    }
}
//Way Create object 2
var string = new Object()
string.hello = "hello world"
string.hi = "hi world"
string.hola = "hola world"

reverse(string.hello)






