const express = require('express'),http = require('http');
const bodyParser = require('body-parser');
const app = express();
const hostname = 'localhost';
const port = 3000;

 app.use(bodyParser.json())

app.post('http://localhost:3000/',(req,res,next) => {
	 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
 next();
	nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 't.manikantareddy160@gmail.com', // generated ethereal user
            pass: '@9629601733' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 't.manikantareddy160@gmail.com', // sender address
        to: req.body.emailid, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});