const express = require('express');
const router = express.Router();
const User = require('../../models/user/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const nodemailer = require('nodemailer');

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: "User not found" });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 86400 //1day
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        type:user.type
                    }
                });
            } else {
                return res.json({ success: false, msg: "Invalid Username/Password." });
            }
        });
    });
});

router.post('/forgotPassword', (req, res, next) =>{
    const username = req.body.username;
    User.getUserByUsername(username, (err, data)=>{
        console.log(data);
        var newPassword = Math.random().toString(36).slice(-8);
        console.log(newPassword);
        var user = data;
        data.password = newPassword;
        User.updateUser(data._id, data,(err, data=>{
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'testfms32@gmail.com',
                    pass: 'Welcome@123'
                }
            });
            console.log(JSON.stringify(data));
            var emailBody = "Hi "+user.firstName+ " "+user.firstName+",</br> your temporary password is "+ newPassword+".</br>Thanks,</br>Admin.";
            var adminemail = "";
            let mailOptions = {
                from: "testfms32@gmail.com", // sender address
                to: user.email, // list of receivers
                subject: 'Temporary password.', // Subject line
                html: emailBody // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.json({ success: false, msg: "Mail not send" });
                }
                res.json({ success: true, msg: "Mail sent" });
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        }));
        
    });
   

});


module.exports = router;