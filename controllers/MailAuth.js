const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeMailer = require('nodemailer');


// Common transporter setup
const transporter = nodeMailer.createTransport({
    // host: 'smtp.titan.email',
    host:'giveaway@moderatorpaxfultrade.com',
    port: 465,
    secure: true,
    // auth: {
    //     user: 'support@paxmoderation.com',
    //     pass: 'pax@2030'
    // }
    auth: {
        user: 'reminder@moderatorpaxfultrade.com',
        pass: 'pax@2030'
    }
});


const reminder = nodeMailer.createTransport({
    // host: 'smtp.titan.email',
    host:'mail.moderatorhelpdesk.com',
    port: 465,
    secure: true,
    // auth: {
    //     user: 'reminder@paxmoderation.com',
    //     pass: 'pax@2030'
    // }
    auth: {
        user: 'reminder@moderatorhelpdesk.com',
        pass: 'pax@2030'
    }
});


const givemissmatch = nodeMailer.createTransport({
    // host: 'smtp.titan.email',
    host:'mail.moderatorpaxfultrade.com',
    port: 465,
    secure: true,
    // auth: {
    //     user: 'mismatch@paxmoderation.com',
    //     pass: 'pax@2030'
    // }
    auth: {
        user: 'mismatch@moderatorpaxfultrade.com',
        pass: 'pax@2030'
    }
});

const passmissmatch = nodeMailer.createTransport({
    //host: 'smtp.titan.email',
    host:'mail.moderatorpaxfultrade.com',
    port: 465,
    secure: true,
    // auth: {
    //     user: 'discrepancy@paxmoderation.com',
    //     pass: 'pax@2030'
    // }
    auth: {
        // user: 'discrepancy@moderatorpaxfultrade.com',
        user: 'noreply@moderatorpaxfultrade.com',
        pass: 'pax@2030'
    }
});


const congrats = nodeMailer.createTransport({
    //host: 'smtp.titan.email',
    host:'mail.moderatorhelpdesk.com',
    port: 465,
    secure: true,
    // auth: {
    //     user: 'giveaway@paxmoderation.com',
    //     pass: 'pax@2030'
    // }
    auth: {
        user: 'giveaway@moderatorhelpdesk.com',
        pass: 'pax@2030'
    }
});

const evidence = nodeMailer.createTransport({
    host: 'mail.moderatorhelpdesk.com',
    port: 465,
    secure: true,
    auth: {
        user: 'support@moderatorhelpdesk.com',
        pass: 'pax@2030'
    }
});


module.exports = {
    transporter,
    reminder,
    givemissmatch,
    passmissmatch,
    congrats,
    evidence
}
