module.exports = function makeExtractMobileNumber(){
    return function extractMobileNumber(text){
        let spaceSeperated = text.split(' ');
        let enterSeperated = text.split('\n');
        let enterSeperatedUrlEncode = text.split('%0a');

        if(spaceSeperated.length == 2){
            if(spaceSeperated[0].length == 11){
                return spaceSeperated[0].toString();
            }else if(spaceSeperated[1].length == 11){
                return spaceSeperated[1].toString();
            }
        }else if(enterSeperated.length == 2){
            if(enterSeperated[0].length == 11){
                return enterSeperated[0].toString();
            }else if(enterSeperated[1].length == 11){
                return enterSeperated[1].toString();
            }
        }else if(enterSeperatedUrlEncode.length == 2){
            if(enterSeperatedUrlEncode[0].length == 11){
                return enterSeperatedUrlEncode[0].toString();
            }else if(enterSeperatedUrlEncode[1].length == 11){
                return enterSeperatedUrlEncode[1].toString();
            }
        }

        
    }
}