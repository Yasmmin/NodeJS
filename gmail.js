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
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Enviar email 2b',
  text: 'Yasmmin Flávia dos Santos Rocha, 2B - wnef dfda lssy tmep'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});