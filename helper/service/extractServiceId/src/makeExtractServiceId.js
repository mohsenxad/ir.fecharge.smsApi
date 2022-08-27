module.exports = function makeExtractServiceId(){
    return function extractServiceId(text){
        let spaceSeperated = text.split(' ');
        let enterSeperated = text.split('\n');
        if(spaceSeperated.length == 2){
            if(spaceSeperated[0].length == 4){
                return spaceSeperated[0].toString();
            }else if(spaceSeperated[1].length == 4){
                return spaceSeperated[1].toString();
            }
        }else if(enterSeperated.length == 2){
            if(enterSeperated[0].length == 4){
                return enterSeperated[0].toString();
            }else if(enterSeperated[1].length == 4){
                return enterSeperated[1].toString();
            }
        }
    }
}