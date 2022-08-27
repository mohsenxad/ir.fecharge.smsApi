module.exports = function makeIsValid(){
    return function isValid(serviceId){
        if(serviceId){
            try {
                let serviceIdValue = parseInt(serviceId);
                if(serviceIdValue>0 && serviceIdValue<2000){
                    return true;
                }else{
                    return false;
                }
            } catch (error) {
                return false;
            }
        }else{
            return false;
        }
    }
}