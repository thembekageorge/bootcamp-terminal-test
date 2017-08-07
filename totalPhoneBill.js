module.exports = function(phoneUsage) {
    var splitPhoneUsage = phoneUsage.split(',');

    const costPerCall = 2.75;
    const costSms = 0.65;

    var listOfUsage = [];
    var call = [];
    var sms = [];

    for (var x = 0; x < splitPhoneUsage.length; x++) {
        listOfUsage.push(splitPhoneUsage[x]);

        if (listOfUsage[x].includes('sms')) {
            sms.push(listOfUsage['sms']);
        } else if (listOfUsage[x].includes('call')) {
            call.push(listOfUsage['call']);
        }
    }

    var totalPhoneBill = (sms.length * costSms) + (call.length * costPerCall);

    return 'R' + totalPhoneBill;
}
