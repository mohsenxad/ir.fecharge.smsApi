
const makeIsValid = require('./isValid/src/isValid');
const makeExtractMobileNumber = require('./extractMobileNumber/src/makeExtractMobileNumber');

let isValid = makeIsValid();
let extractMobileNumber = makeExtractMobileNumber();

let mobileNumberHelper = Object.freeze({
    isValid,
    extractMobileNumber
});


module.exports = mobileNumberHelper;