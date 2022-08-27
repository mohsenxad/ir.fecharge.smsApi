const HELP_MESSAGE ='کد سرویس و شماره ی خط را در خط جداگانه و در یک پیام ارسال کنید.'

module.exports = function makeSendOrderHelp(kavehnegarApi, KAVEHNEGAR_SENDER){
    return function sendOrderHelp(receptor){
        kavehnegarApi.Send({
            message: HELP_MESSAGE,
            sender: KAVEHNEGAR_SENDER,
            receptor: receptor
        },
        function(response, status) {
            console.log(response);
            console.log(status);
        });
    }
}