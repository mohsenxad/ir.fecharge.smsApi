var Kavenegar = require('kavenegar');
require('dotenv').config();

const API_KEY = process.env.KAVEH_NEGAR_TOKEN;
const KAVEHNEGAR_SENDER = process.env.KAVEH_NEGAR_SMS_NUMBER;
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