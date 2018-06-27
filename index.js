var nodemailer = require("nodemailer");

// Use Smtp Protocol to send Email
var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "from@email.com",
    pass: "email-password"
  }
});

var mail = {
  from: "from@email.com",
  to: "to@email.com",
  subject: "Send Email Using Node.js",
  text: "Node.js New world for me",
  html: "<b>Node.js New world for me</b>"
};

smtpTransport.sendMail(mail, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log("Message sent: " + response.message);
  }

  smtpTransport.close();
});

