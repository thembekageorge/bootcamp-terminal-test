
function isWeekday(day){
 var weekend = !day.startsWith("S");
  return weekend;
}
console.log(isWeekday("Saturday"));
console.log(isWeekday("Monday"));




module.exports = function(name){
    return "Hello, " + name;
}
