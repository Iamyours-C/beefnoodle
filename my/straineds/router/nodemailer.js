// 发送邮箱
let nodemailer=require('nodemailer');
let nodemailerTransport=require('nodemailer-smtp-transport');

let config=require('../config');
nodemailerTransport= nodemailer.createTransport(nodemailerTransport({
    service: config.email.service,
    auth: {

        user: config.email.user,
        pass: config.email.pass
    },
    domains:["qq.com"],
    host:"smtp.qq.com",
    port:465,
    secure:true
}));
/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendEmail = function (recipient, subject, html,codeback) {
 
    nodemailerTransport.sendMail({
 
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html
 
    }, codeback);
}
module.exports = sendEmail;