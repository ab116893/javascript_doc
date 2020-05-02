function doubleSay(str){
    return str + "," + str
}

function capitalize(str){
    return str[0].toUpperCase() + str.substring(1)
}

function exclaim(str){
    return str + '!'
}

let result = exclaim(capitalize(doubleSay("local host")))
console.log(result)

result = "local host" |> doubleSay |> capitalize |> exclaim
console.log(result)

