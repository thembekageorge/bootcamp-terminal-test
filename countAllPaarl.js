function countAllPaarl(regNum){

var splittedList = regNum.split(', ');
 // var RegisNum = [];
  var count = 0;
   for (var i=0; i<splittedList.length; i++){
      var registrationNumber = splittedList[i];

        if (registrationNumber.startsWith('CJ')){
        // RegisNum.push(registrationNumber);
          count = count +1;
        }
   }
return count;

};
countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864');
