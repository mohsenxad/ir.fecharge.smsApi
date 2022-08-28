module.exports = function makeSendSms(KAVEH_NEGAR_TOKEN){
    return async function sendSms(sender,receptor ,message){
        let urlWithData = `https://api.kavenegar.com/v1/${KAVEH_NEGAR_TOKEN}/sms/send.json?receptor=${receptor}&sender=${sender}&message=${message}`;
        let sendSmsResponse = await fetch(urlWithData);
        return sendSmsResponse;
    }
}