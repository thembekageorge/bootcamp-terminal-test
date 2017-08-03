function yearsAgo(year){
var today = new Date();
var currentYear = today.getFullYear();
var yearsA =  currentYear-year ;
 return yearsA;
}
console.log("That was " + yearsAgo(1997)+" years ago");

module.exports = function(name){
    return "Hello, " + name;
}
