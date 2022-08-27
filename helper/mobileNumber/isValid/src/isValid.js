module.exports = function makeIsValid(){
    return function isValid(mobileNumber){
        if(mobileNumber){
            console.log(`mobile Number is ${mobileNumber}`);
            if(mobileNumber.toString().trim().length == 11){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
        
    }
}