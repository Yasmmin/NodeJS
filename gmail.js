var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Yasmminflaviaifc@gmail.com',
    pass: 'wnef dfda lssy tmep'
  }
});

var mailOptions = {
  from: 'yasmminflaviaifc@gmail.com',
  to: 'ncorrearoese@gmail.com',
  subject: 'eu te amo muito',
  text: 'te amo vida, boa prova!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});