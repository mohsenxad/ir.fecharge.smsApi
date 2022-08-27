module.exports = function makeGetPaymentUrl(){
    return function getPaymentUrl(mobileNumber, serviceId){
        console.log(`make payment Url for ${mobileNumber} | servicecId: ${serviceId}`);
        return 'https://fecharge.ir';
    }
}