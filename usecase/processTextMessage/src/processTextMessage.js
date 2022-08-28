module.exports  =   function makeProcessTextMessage(mobileNumberHelper, serviceHelper, getPaymentUrl, sendPaymentUrl, sendOrderHelp){
    return function processTextMessage(sender, textMessage){
        let mobileNumber = mobileNumberHelper.extractMobileNumber(textMessage);
        let serviceId = serviceHelper.extractServiceId(textMessage);

        let isValidMobileNumber = mobileNumberHelper.isValid(mobileNumber);
        let isValidServiceId = serviceHelper.isValid(serviceId);

        if(
            isValidMobileNumber &&
            isValidServiceId
        ){
            let paymentUrl = getPaymentUrl(mobileNumber, serviceId);
            let sendPaymentUrlResponse = sendPaymentUrl(sender, paymentUrl);
        }else{
            let sendHelpReposen = sendOrderHelp(order.getSender());
        }

        
        
        
        
        
    }
}