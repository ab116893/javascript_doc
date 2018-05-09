//Regex for Phone format XXXXXXXXXX, XXX-XXX-XXXX, XXX XXX XXXX, (XXX) XXX-XXXX, and (XXX)XXX-XXXX.
 var regex = /^([(]?(\w{3})[)]?[-\s]?(\w{3})[-\s]?(\w{4}))$/
 //Regex for Hex
 rexHex = /(#[0-9a-f]{6}|#[0-9a-f]{3})$/i
 //Regex for Decimal
 rexDec = /((rgb)\((\d*(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b)[,\s]+){2,3}\s*\d*(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b)+\))/i
 //Regex for percent.
 rexPer = /(rgb)\((\d*(\b([0-9]|[0-9][0-9]|100)\b)+%[,\s]+){2,3}\s+\d*(\b([0-9]|[0-9][0-9]|100)\b)+%?\)$/i

 //Regex for color
 var hexa = /([#])[A-Fa-f0-9]{6}/i
 var percent = /100|[0-9][0-9]|[rgb]|[(%)]/i
 var deci = /[rbg]|(\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b)/i
 var hexa1 =  /([#])[A-Fa-f\d]{3}/

 //Regex for number
 var regex =/^[-+]?\d+$/;
 //regex for only positive
 var regex2 = /^[+]?\d+$/;
 //Regex for numeric
 var regex3 = /^[+-]?([0-9]*[.])?[0-9]+$/
 //Regex for zip code
 var regex4 = /^\d{5}(?:[-\s]\d{4})?$/
 //regex for email
 var regex6 = /^\S+@\S+\.\S+$/
 