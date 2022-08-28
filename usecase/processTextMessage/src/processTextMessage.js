module.exports  =   function makeProcessTextMessage(mobileNumberHelper, serviceHelper, getPaymentUrl, sendPaymentUrl, sendOrderHelp){
    return async function processTextMessage(sender, textMessage){
        let mobileNumber = mobileNumberHelper.extractMobileNumber(textMessage);
        let serviceId = serviceHelper.extractServiceId(textMessage);

        let isValidMobileNumber = mobileNumberHelper.isValid(mobileNumber);
        let isValidServiceId = serviceHelper.isValid(serviceId);

        if(
            isValidMobileNumber &&
            isValidServiceId
        ){
            let paymentUrl = getPaymentUrl(mobileNumber, serviceId);
            let sendPaymentUrlResponse = await sendPaymentUrl(sender, paymentUrl);
        }else{
            let sendHelpReposen = await sendOrderHelp(order.getSender());
        }

        
        
    }
}