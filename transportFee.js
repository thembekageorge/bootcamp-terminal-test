function transportFee(shift)
{
var transportfee;
  if (shift === 'morning')
    return 'R20' ;
  else if (shift === 'afternoon')
    return 'R10' ;
  else if (shift === 'nightshift')
   return 'free';
}

console.log(transportFee('morning'));


module.exports = function(name){
    return "Hello, " + name;
}
