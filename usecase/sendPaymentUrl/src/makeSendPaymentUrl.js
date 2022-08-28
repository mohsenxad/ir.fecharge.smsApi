module.exports = function makeSendPaymentUrl(sendSms, KAVEHNEGAR_SENDER){
    return async function sendPaymentUrl(receptor, paymentUrl){
        let message = `برای فعال سازی سرویس مد نظرتون از لینک زیر اقدام کنید\n ${paymentUrl}`; 
        const sendSmsResponse = await sendSms(KAVEHNEGAR_SENDER, receptor, message);
        return sendSmsResponse;
    }
}