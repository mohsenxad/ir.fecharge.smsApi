const makeExtractServiceId = require("../src/makeExtractServiceId");

const extractServiceId = makeExtractServiceId();

describe('extract serviceId', () => {
    it('extract serviceId from space seperated text', () => {
        const message = '09013371492 1310';
        let serviceId = extractServiceId(message)
        expect(serviceId).toBe("1310");
    }),
    it('get serviceId from enter sepeated text structure', () => {
        const message = '09013371492\n1310';
        let serviceId = extractServiceId(message);
        expect(serviceId).toBe("1310");

    }),
    it('message has no serviceId', () => {
        const message = '1310';
        let serviceId = extractServiceId(message);
        expect(serviceId).toBe(undefined);
    })
})