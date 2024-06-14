const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ 'path': ['.env.local', 'env.local'] });
const PORT = process.env.PORT || 8000;

// const mongoose = require("mongoose");

// server used to send send emails
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());

app.use("/", router);
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/likesdb');
// }

// host: process.env.HOST,
// port: process.env.PORT,
// requireTLS: true,
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

router.get("/", (req, res) => {
  res.send(`Server Running on port ${PORT}`);
})

router.get("/test", (req, res) => {
  res.send(`Test is successful`);
})

router.get("/testEmail", (req, res) => {
  contactEmail.verify((error) => {
    if (error) {
      res.json(error);
    } else {
      res.send("Ready to Send");
    }
  });
})

router.post("/contact", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
