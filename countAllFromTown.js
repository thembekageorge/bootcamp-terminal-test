function countAllFromTown(registrationNum,location){

var splittedList = registrationNum.split(',');
 console.log(splittedList);
//  var RegisNum = [];
var count = 0;
   for (var i=0; i<splittedList.length; i++){
     //var something = trim(regis)
      var registrationNumber = splittedList[i];
      var something = registrationNumber.trim(" ");
     // console.log(something[i]);
        if (something.startsWith(location)){
       console.log(something[i]);
        // RegisNum.push(registrationNumber);
          count = count+1;
        }
   }
return count;
};

module.exports = function(name){
    return "Hello, " + name;
}
