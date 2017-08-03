function totalPhoneBill(CallsAndSms){

  var total = 0;
  var splittedList = CallsAndSms.split(", ");

  var callList = [];
  var smsList = [];

  for (var i=0; i<splittedList.length; i++){

    var element = splittedList[i];

    if (element === 'call')
      callList.push(element);
    if (element === 'sms')
      smsList.push(element);
  }
  var HowManyCalls = callList.length;
  var HowManySms = smsList.length;

  var oneCall = 2.75;
  var oneSms = 0.65;

  CallCost = HowManyCalls * oneCall;
  SmsCost = HowManySms * oneSms ;

  total = CallCost+SmsCost ;
  return "R" + total.toFixed(2);
}

console.log(totalPhoneBill('call, sms, call, sms, sms'));




module.exports = function(name){
    return "Hello, " + name;
}
