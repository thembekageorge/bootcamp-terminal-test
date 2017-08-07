function countRegNumber(regNum){
var output1 = regNum.split(",");
  var length = output1.length;
  return length;
}
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
console.log(regCount+"");
assert.equal(regCount, 3);
