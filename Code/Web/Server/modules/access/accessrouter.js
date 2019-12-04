const express = require("express");
const router = express.Router();
const Access = require("../../models/access/access");
const config = require("../../config/passport");

//Get
router.get("/all", config.checkToken, (req, res, next) => {
  //router.get("/all", (req, res, next) => {
  Access.getAccess((err, data) => {
    res.json(data);
  });
});

router.get("/allbyrommno/:roomno", config.checkToken, (req, res, next) => {
  //router.get("/allbyrommno/:roomno", (req, res, next) => {
  var roomno = req.params.roomno;
  Access.getAllByRoom(roomno, (err, data) => {
    data.dateOfEntry = new Date(data.dateOfJoin).toLocaleDateString("en");
    res.json(data);
  });
});

router.get("/get/:code", config.checkToken, (req, res, next) => {
  //router.get("/get/:code", (req, res, next) => {
  var code = req.params.code;
  //console.log(name);
  Access.getByCode(code, (err, data) => {
    data.dateOfEntry = new Date(data.dateOfJoin).toLocaleDateString("en");
    res.json(data);
  });
});

router.get("/generatecode", config.checkToken, (req, res, next) => {
  //router.get("/generatecode", (req, res, next) => {
  Access.generateCode((err, data) => {
    res.json(data);
  });
});

router.get(
  "/gettyperoomno/:type/:roomno",
  config.checkToken,
  (req, res, next) => {
    //router.get("/gettyperoomno/:type/:roomno", (req, res, next) => {
    var type = req.params.type;
    var roomno = req.params.roomno;
    //console.log(type + " " + roomno);
    //console.log(name);
    Access.getByTypeAndRoom(type, roomno, (err, data) => {
      data.dateOfEntry = new Date(data.dateOfJoin).toLocaleDateString("en");
      res.json(data);
    });
  }
);

//Create
router.post("/create", config.checkToken, (req, res, next) => {
  //router.post("/create", (req, res, next) => {
  let newAccess = new Access({
    roomnumber: req.body.roomnumber,
    type: req.body.type,
    code: req.body.code,
    dateOfEntry: req.body.dateOfEntry,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    active: req.body.active
  });
  Access.addAccess(newAccess, (err, rom) => {
    if (err) {
      res.json({ success: false, msg: "Failed to Add Access." });
    } else {
      res.json({ success: true, msg: "Access Added." });
    }
  });
});

//Update
router.put("/update/:id", config.checkToken, function(req, res, next) {
  //router.put("/update/:id", function(req, res, next) {
  //console.log( req.body);
  var id = req.params.id;
  var update = {
    roomnumber: req.body.roomnumber,
    type: req.body.type,
    code: req.body.code,
    dateOfEntry: req.body.dateOfEntry,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    active: req.body.active
  };
  Access.updateAccess(id, update, (err, access) => {
    if (err) {
      res.json({ msg: "Failed while updating Access", status: "error" });
    } else {
      res.json({ msg: "Access updated successfully" });
    }
  });
});

//Delete
router.delete("/delete/:id", config.checkToken, (req, res, next) => {
  //router.delete("/delete/:id", (req, res, next) => {
  Access.deleteAccess(req.params.id, (err, result) => {
    if (err) {
      res.json({
        msg: "Failed while deleting Access",
        status: "error",
        success: false
      });
    } else {
      res.json({ msg: "Access deleted successfully" });
    }
  });
});

module.exports = router;
