module.exports = function makeOrder(){
    return function order(
        sender,
        mobileNumber,
        serviceId
    ){
        function info(){
            return `sender: ${sender} | mobileNumber: ${mobileNumber} | serviceId : ${serviceId}`
        }

        function setPaymentUrl(paymentUrl){

        }

        return Object.freeze(
            {
                getSender: () => sender,
                getMobileNumber : ()=> mobileNumber,
                getServiceId: ()=> serviceId,
                getPaymentUrl: ()=> paymentUrl,
                info: info,
            }
        );
    }
}