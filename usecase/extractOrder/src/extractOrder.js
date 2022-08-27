module.exports  =   function makeExtractOrder(order){
    return function extractOrder(message){
        let sender = '09122707748';
        let mobileNumber = '09013371492';
        let serviceId = 12345;

        return order(sender, mobileNumber,serviceId);

    }
}