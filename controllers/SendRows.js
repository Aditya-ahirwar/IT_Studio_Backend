
import dotenv from "dotenv"
import nodemailer from 'nodemailer'

dotenv.config();

const SendRows = (req, res) => {
    // const { email, subject, message } = req.body;
    // console.log(req.body)
    let message = '';
    for(let row in req.body){
        message += `
        ${Number(row)+1}) 
        name : ${req.body[row].name}
        email : ${req.body[row].email}
        phone : ${req.body[row].phone}
        hobby : ${req.body[row].hobby}
        `
    }
    console.log(message)

  

    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      },
    });
  

    const mailOptions = {
      from: process.env.Email,
      to: 'adityaahirwar3@gmail.com',
      subject: "From React JS Assignment",
      text: message,
    };
  

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.send('Email sent');
      }
    });
}

export default SendRows