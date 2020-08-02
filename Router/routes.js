const express = require("express");
const nodemailer = require("nodemailer");
const enquiry = require("../Model/Model");
const router = express.Router();

router.get("/enquiry", (req, res, next) => {
  enquiry
    .find({})
    .exec()
    .then((data) => {
      res.status(200).json({ NumberOfEnquiry: data.length, message: data });
    })
    .catch((error) => {
      res.status(500).json({ error: error, message: "No Enquiry Found" });
    });
});

router.post("/enquiry", (req, res, next) => {
  const Enquiry = new enquiry({
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    Enquiry: req.body.Enquiry
  });
  Enquiry.save()
    .then((data) => {
      res.status(201).json({ message: data });
    })
    .catch((error) => {
      res.status(500).json({ error: error, message: "Every Field Required" });
    });
  const email = req.body.email;
  const output = `
        <h1> You have a new Enquiry </h1>
        <h3> Contact Details </h3>
        <ul>
            <li> Name : ${req.body.name} </li>
            <li> Email : ${req.body.email} </li>
            <li> Phone Number : ${req.body.phoneNo} </li>
        </ul>
        <h3> Enquiry </h3>
        <p> ${req.body.Enquiry} </p>
        `;

  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Enquiry" <${email}>`, // sender address
      to: "thedeepanshuaggarwal@gmail.com", // list of receivers
      subject: "Enquiry", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

module.exports = router;
