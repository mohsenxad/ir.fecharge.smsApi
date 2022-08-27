const makeIsValid = require('./isValid/src/isValid');
const makeExtractServiceId = require('./extractServiceId/src/makeExtractServiceId');

let isValid = makeIsValid();
let extractServiceId = makeExtractServiceId();

let serviceHelper = Object.freeze({
    isValid,
    extractServiceId
});

module.exports = serviceHelper;