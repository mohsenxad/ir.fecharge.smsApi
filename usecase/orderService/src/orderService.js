module.exports  =  function makeOrderService(){
    return function orderService(mobileNumber, serviceId){
        console.log(`New Order for ${mobileNumber} and ${serviceId}`);
    }
}