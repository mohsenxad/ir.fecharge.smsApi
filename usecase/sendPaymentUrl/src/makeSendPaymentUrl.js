

module.exports = function makeSendPaymentUrl(kavehnegarApi, KAVEHNEGAR_SENDER){
    return function sendPaymentUrl(receptor, paymentUrl){
        kavehnegarApi.Send({
            message: `برای فعال سازی سرویس مد نظرتون از لینک زیر اقدام کنید\n ${paymentUrl}`,
            sender: KAVEHNEGAR_SENDER,
            receptor: receptor
        },
        function(response, status) {
            console.log(response);
            console.log(status);
        });
    }
}