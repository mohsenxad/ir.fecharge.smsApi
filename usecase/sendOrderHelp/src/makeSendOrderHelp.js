const HELP_MESSAGE ='کد سرویس و شماره ی خط را در خط جداگانه و در یک پیام ارسال کنید.'

module.exports = function makeSendOrderHelp(sendSms, KAVEHNEGAR_SENDER){
    return function sendOrderHelp(receptor){
        sendSms(KAVEHNEGAR_SENDER, receptor, HELP_MESSAGE);
    }
}