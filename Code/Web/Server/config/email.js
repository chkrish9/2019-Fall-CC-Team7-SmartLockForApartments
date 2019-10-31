const nodemailer = require("nodemailer");

module.exports.sendEmail = (res,toemail,subject,emailBody,respjson)=>{
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "testfms32@gmail.com",
          pass: "Welcome@123"
        }
      });
     
      let mailOptions = {
        from: "testfms32@gmail.com", // sender address
        to: toemail, // list of receivers
        subject: subject, // Subject line
        html: emailBody // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.json({ success: false, msg: "Mail not send" });
        }
        res.json(respjson);
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      });
}