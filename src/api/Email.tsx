import nodemailer from "nodemailer";
import { useEffect } from "react";

type type = string | undefined;

const useEmail = (name: type, email: type, text: type, phone: type) => {
  useEffect(() => {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "hmalhotra2004@gmail.com",
        pass: "TLOU@123",
      },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: email, // sender address
        to: "hmalhotra2004@gmail.com", // list of receivers
        subject: "", // Subject line
        text: `message from ${name}
                 phone: ${phone}   
                 text: ${text}                  `, // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
  });
};

export default useEmail;
