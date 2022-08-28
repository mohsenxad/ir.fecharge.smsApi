var Kavenegar = require('kavenegar');

const API_KEY = '3845615061524B41362B4D474C543156433471556D6D476D6B4F756A5A374A4E';
const KAVEHNEGAR_SENDER = '10000808800000';
var kavehnegarApi = Kavenegar.KavenegarApi({
    apikey: API_KEY
});

const makeOrder = require('../model/order.mdl');

const makeOrderService = require('./orderService/src/orderService');
const makeProcessTextMessage = require('./processTextMessage/src/processTextMessage');
const makeGetPaymentUrl = require('./getPaymentUrl/src/makeGetPaymentUrl');
const makeSendPaymentUrl = require('./sendPaymentUrl/src/makeSendPaymentUrl');
const makeSendOrderHelp = require('./sendOrderHelp/src/makeSendOrderHelp');

const  mobileNumberHelper  = require('../helper/mobileNumber');
const  serviceHelper  = require('../helper/service');

let order = makeOrder();
let orderService = makeOrderService();
let getPaymentUrl = makeGetPaymentUrl();
let sendPaymentUrl = makeSendPaymentUrl(kavehnegarApi, KAVEHNEGAR_SENDER);
let sendOrderHelp = makeSendOrderHelp(kavehnegarApi, KAVEHNEGAR_SENDER);
let processTextMessage = makeProcessTextMessage(mobileNumberHelper, serviceHelper, getPaymentUrl, sendPaymentUrl, sendOrderHelp);


let useCaseService = Object.freeze({
    processTextMessage,
})

module.exports = useCaseService;