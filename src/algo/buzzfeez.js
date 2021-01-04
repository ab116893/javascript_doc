var buzzfizz = function(number){
    if(number % 3 === 0){
      return "buzz"
    }
    else if(number % 5 === 0){
      return "fizz"
    }
    else{
      return "buzzfizz"
    }
  }
  console.log(buzzfizz(11))