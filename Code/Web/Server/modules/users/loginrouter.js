const express = require("express");
const router = express.Router();
const User = require("../../models/user/user");
const Room = require("../../models/room/room");
const jwt = require("jsonwebtoken");
const config = require("../../config/database");
const email = require("../../config/email");

//Authenticate
router.post("/authenticate", (req, res, next) => {
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
                Room.getRoomByUserId(user._id,(err, data)=>{
                    let roomno = (data===null)?"":data.roomnumber;
                    console.log(data);
                    res.json({
                        success: true,
                        token: "JWT " + token,
                        user: {
                            id: user._id,
                            username: user.username,
                            type: user.type,
                            roomnumber:roomno
                        }
                    });
                });
                
            } else {
                return res.json({ success: false, msg: "Invalid Username/Password." });
            }
        });
    });
});

router.post("/forgotPassword", (req, res, next) => {
    const username = req.body.username;
    User.getUserByUsername(username, (err, data) => {
        console.log(data);
        var newPassword = Math.random()
            .toString(36)
            .slice(-8);
        console.log(newPassword);
        var user = data;
        data.password = newPassword;
        User.updateUser(
            data._id,
            data,
            (err,
                data => {
                    var emailBody =
                        "Hi " +
                        user.firstName +
                        " " +
                        user.lastName +
                        ",</br> your temporary password is " +
                        newPassword +
                        ".</br>Thanks,</br>Admin.";

                    var subject = "Temporary password.";
                    email.sendEmail(res,user.email,subject, emailBody,{ success: true, msg: "Mail sent" });
                })
        );
    });
});

module.exports = router;
