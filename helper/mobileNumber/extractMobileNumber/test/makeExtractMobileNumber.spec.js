const makeExtractMobileNumber = require("../src/makeExtractMobileNumber");

const extractMobileNumber = makeExtractMobileNumber();

describe('extractMobileNumber', ()=> {
    it('get mobileNumber from space sepeated text structure', () => {
        const message = '09013371492 1310';
        let mobileNumber = extractMobileNumber(message);
        expect(mobileNumber).toBe("09013371492");

    }),
    it('get mobileNumber from enter sepeated text structure', () => {
        const message = '09013371492\n1310';
        let mobileNumber = extractMobileNumber(message);
        expect(mobileNumber).toBe("09013371492");

    }),
    it('message has no mobileNumber', () => {
        const message = '1310';
        let mobileNumber = extractMobileNumber(message);
        expect(mobileNumber).toBe(undefined);
    })
})