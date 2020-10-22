const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const { promisify } = require('util');
const busboy = require('connect-busboy');


const app = express();

//CHECK IF LOCAL
const dev = app.get('env') !== 'production';
if (dev)
    require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const unlinkAsync = promisify(fs.unlink);

// SENDING EMAIL API
app.post('/sendEmail', (req, res) => {
    let title = req.body.title;
    let role = req.body.role;
    let period = req.body.period;
    let budget = req.body.budget;
    let email = req.body.email;
    let additional = req.body.text;


    if (!req.body.email) {
        return res.status(400).json({'msg' : 'Email filed is required'});
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if (!validateEmail(email)) {
        return res.status(400).json({'msg' : 'Email is not correct'});
    }

    if (title) {
        title = `<p>How can we help you: ${title}</p>`;
    }

    switch(role) {
        case '-1':
            role = '';
            break;
        case '0':
            role = `<p>Role: CEO/CTO</p>`;
            break;
        case '1':
            role = `<p>Role: Project Manager</p>`;
            break;
        case '2':
            role = `<p>Role: Technical Lead</p>`;
            break;
        case '3':
            role = `<p>Role: Other</p>`;
            break;
    }

    switch(period) {
        case '-1':
            period = '';
            break;
        case '0':
            period = `<p>Project Duration: Less than 1 month</p>`;
            break;
        case '1':
            period = `<p>Project Duration: From 1 to 3 month</p>`;
            break;
        case '2':
            period = `<p>Project Duration: From 3 to 6 month</p>`;
            break;
        case '3':
            period = `<p>Project Duration: More than 6 month</p>`;
            break;
    }

    switch(budget) {
        case '-1':
            budget = '';
            break;
        case '0':
            budget = `<p>Budget: Less than 1000$</p>`;
            break;
        case '1':
            budget = `<p>Budget: 1000$ - 5000$</p>`;
            break;
        case '2':
            budget = `<p>Budget: 5000$ - 10000$</p>`;
            break;
        case '3':
            budget = `<p>Budget: More than 10000$</p>`;
            break;
    }

    if (additional) {
        additional = `<p>Additional information: ${additional}</p>`;
    }

    const transporter = nodemailer.createTransport({
        host: 'coxit.co',
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true, //Force TLS
        tls: {  
            rejectUnauthorized: false
        },
        auth: {
            user: 'mail@coxit.co',
            pass: '6o25eJMV2eHgYDEc'
        }
    });

    const mailOptions = {
        from: 'mail@coxit.co',
        to: 'leha.volodymyr@gmail.com',
        subject: `[Help Me] ${req.body.email}`,
        html: `<p>Letter was send by <b>${req.body.email}</b></p>
                ${title}${role}${period}${budget}${additional}`
    };


    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);            
            return res.status(400).json({"msg": "Email was not sended."});
        }
        else
            return res.status(204).send();;
    });

});


app.use(busboy());
app.post('/sendResume', (req, res) => {
    let fstream;

    let fileUploaded;
    let position = '';
    let error = false;

    req.pipe(req.busboy);
    req.busboy.on('file', (fieldname, file, filename) => {
        if (!file) {
            error = true;
        } else {
            fstream = fs.createWriteStream(__dirname + '/uploads/' + filename);
            file.pipe(fstream);
            fileUploaded = filename;
        }
    });

    req.busboy.on('field', (fieldname, value) => {
        if (fieldname === 'position') {
            position = value;
        }
    });

    req.busboy.on('finish', () => {
        if (!error) {
            const transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD
                }
            });
        
            const mailOptions = {
                from: process.env.EMAIL,
                to: 'volodymyr.hresko@coxit.co',
                subject: `[Resume] New resume ${position}`,
                html: `<p>You received new resume ${position ? 'for ' + position : ''}</p>`,
                attachments: [{
                    filename: fileUploaded,
                    path: __dirname + '/uploads/' + fileUploaded
                }]
            };
        
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    unlinkAsync(__dirname + '/uploads/' + fileUploaded);
                    console.log(err);
                    return res.status(400).json({"msg": "Email was not sended."});
                }
                else {
                    unlinkAsync(__dirname + '/uploads/' + fileUploaded);
                    return res.status(204).send();;
                }
            });
        } else {
            return res.status(400).json({"msg" : "File is required"});
        }
    });
});


app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => { console.log('Server started!') });
