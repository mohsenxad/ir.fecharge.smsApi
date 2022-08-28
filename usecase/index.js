const KAVEH_NEGAR_TOKEN = KAVEH_NEGAR_TOKEN_VALUE;
const KAVEHNEGAR_SENDER = KAVEH_NEGAR_SMS_NUMBER_VALUE;

const makeOrder = require('../model/order.mdl');

const makeOrderService = require('./orderService/src/orderService');
const makeProcessTextMessage = require('./processTextMessage/src/processTextMessage');
const makeGetPaymentUrl = require('./getPaymentUrl/src/makeGetPaymentUrl');
const makeSendPaymentUrl = require('./sendPaymentUrl/src/makeSendPaymentUrl');
const makeSendOrderHelp = require('./sendOrderHelp/src/makeSendOrderHelp');
const makeSendSms = require('./sendSms/src/makeSendSms');

const  mobileNumberHelper  = require('../helper/mobileNumber');
const  serviceHelper  = require('../helper/service');

let order = makeOrder();
let orderService = makeOrderService();
let getPaymentUrl = makeGetPaymentUrl();
let sendSms = makeSendSms(KAVEH_NEGAR_TOKEN);
let sendPaymentUrl = makeSendPaymentUrl(sendSms, KAVEHNEGAR_SENDER);
let sendOrderHelp = makeSendOrderHelp(sendSms, KAVEHNEGAR_SENDER);
let processTextMessage = makeProcessTextMessage(mobileNumberHelper, serviceHelper, getPaymentUrl, sendPaymentUrl, sendOrderHelp);


let useCaseService = Object.freeze({
    processTextMessage,
})

module.exports = useCaseService;