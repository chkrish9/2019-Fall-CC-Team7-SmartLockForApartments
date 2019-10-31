const express = require("express");
const router = express.Router();
const passport = require("passport");
const Room = require("../../models/room/room");
const config = require("../../config/passport");

//Get
router.get(
  "/all",
  config.checkToken,
  (req, res, next) => {
    Room.getRooms((err, data) => {
      res.json(data);
    });
  }
);

//Create
router.post(
  "/create",
  config.checkToken,
  (req, res, next) => {
    let newRoom = new Room({
      roomnumber: req.body.roomnumber,
      floor: req.body.floor,
      isVacant: req.body.isVacant,
      user: req.body.user
    });
    Room.addRoom(newRoom, (err, rom) => {
      if (err) {
        res.json({ success: false, msg: "Failed to Add room." });
      } else {
        res.json({ success: true, msg: "Room Added." });
      }
    });
  }
);

router.post(
  "/createrooms",
  config.checkToken,
  (req, res, next) => {
    let newRooms = req.body;
    Room.addRooms(newRooms, (err, rom) => {
      if (err) {
        res.json({ success: false, msg: "Failed to Add room." });
      } else {
        res.json({ success: true, msg: "Room Added." });
      }
    });
  }
);

//Update
router.put(
  "/update/:id",
  config.checkToken,
  function(req, res, next) {
    //console.log( req.body);
    var id = req.params.id;
    var update = {
      roomnumber: req.body.roomnumber,
      floor: req.body.floor,
      isVacant: req.body.isVacant,
      user: req.body.user
    };
    Room.updateRoom(id, update, (err, room) => {
      if (err) {
        res.json({ msg: "Failed while updating room", status: "error" });
      } else {
        res.json({ msg: "room updated successfully" });
      }
    });
  }
);

//Delete
router.delete(
  "/delete/:id",
  config.checkToken,
  (req, res, next) => {
    Room.deleteRoom(req.params.id, (err, result) => {
      if (err) {
        res.json({
          msg: "Failed while deleting room",
          status: "error",
          success: false
        });
      } else {
        res.json({ msg: "room deleted successfully" });
      }
    });
  }
);

module.exports = router;
