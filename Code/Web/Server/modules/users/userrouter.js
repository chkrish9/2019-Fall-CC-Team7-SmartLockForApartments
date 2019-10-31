const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/user/user");
const Room = require("../../models/room/room");
const config = require("../../config/passport");

//Get
router.get(
  "/all",
  config.checkToken,
  (req, res, next) => {
    User.getUsers((err, data) => {
      data.forEach(element => {
        element.dateOfJoin = new Date(element.dateOfJoin).toLocaleDateString(
          "en"
        );
      });
      res.json(data);
    });
  }
);

router.get(
  "/get/:name",
  config.checkToken,
  (req, res, next) => {
    var name = req.params.name;
    //console.log(name);
    User.getUserNames(name, (err, data) => {
      data.dateOfJoin = new Date(data.dateOfJoin).toLocaleDateString(
        "en"
      );
      res.json(data);
    });
  }
);

router.get(
  "/getid/:id",
  config.checkToken,
  (req, res, next) => {
    var id = req.params.id;
    User.getUserById(id, (err, data) => {
      data.dateOfJoin = new Date(data.dateOfJoin).toLocaleDateString(
        "en"
      );
      res.json(data);
    });
  }
);

//Create
router.post(
  "/create",
  config.checkToken,
  (req, res, next) => {
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      dateOfJoin: req.body.dateOfJoin,
      username: req.body.username,
      password: req.body.password,
      type: req.body.type
    });
    User.addUser(newUser, (err, user) => {
      if (err) {
        res.json({ success: false, msg: "Failed to Add user." });
      } else {
        Room.getRoomById(req.body.roomId, (err, room) => {
          if (err) {
            res.json({ msg: "Failed while updating room", success: false });
          } else {
            room.user = user._id;
            room.isVacant = false;
            Room.updateRoom(room._id, room, (err, room) => {
              res.json({ success: true, id: user._id, msg: "User Added." });
            })
          }
        })
      }
    });
  }
);

//Update
router.put(
  "/update/:id",
  config.checkToken,
  function (req, res, next) {
    //console.log( req.body);
    var id = req.params.id;
    var update = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      dateOfJoin: req.body.dateOfJoin,
      username: req.body.username,
      password: req.body.password,
      type: req.body.type
    };
    User.updateUser(id, update, (err, user) => {
      if (err) {
        res.json({ msg: "Failed while updating user", success: false });
      } else {
        res.json({ msg: "user updated successfully", success: true, id: user._id });
      }
    });
  }
);

//Delete
router.delete(
  "/delete/:id",
  config.checkToken,
  (req, res, next) => {
    User.deleteUser(req.params.id, (err, result) => {
      if (err) {
        res.json({
          msg: "Failed while deleting user",
          status: "error",
          success: false
        });
      } else {
        Room.getRoomByUserId(req.params.id, (err, room) => {
          if (err) {
            res.json({ msg: "Failed while updating room", success: false });
          } else {
            room.isVacant = true;
            room.user = null;
            Room.updateRoom(room._id, room, (err, room) => {
              res.json({ msg: "user deleted successfully", success: true });
            })
          }
        })

      }
    });
  }
);

module.exports = router;
