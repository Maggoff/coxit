const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

//CHECK IF LOCAL
const dev = app.get('env') !== 'production';
if (dev)
    require('dotenv').config();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// SENDING EMAIL API
app.post('/sendEmail', (req, res) => {
    const title = req.body.title;
    const role = req.body.role;
    const period = req.body.period;
    const budget = req.body.budget;
    const email = req.body.email;
    const additional = req.body.text;

    console.log(req.body);
    if (!req.body.email) {
        console.log('not works');
        res.status(400).json({'msg' : 'Email filed is required'});
    } else {
        console.log('it works');
    }

    console.log(title, role, period, budget, email, additional);
    res.status(204).send();
});


app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => { console.log('Server started!') });
