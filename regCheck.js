function regCheck(regNum, loc){
var output = regNum.endsWith(loc);
return output;
}
var isGP = regCheck('DV 23 NB GP', 'GP');

console.log(isGP);
