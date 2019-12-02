const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const Home = require("../../models/home/home");
const config = require("../../config/passport");

//Create
const uploadImage = async (req, res, next) => {
  // to declare some path to store your converted image
  var base64Image = req.body.base64image.replace(
    /^data:image\/png;base64,/,
    ""
  );
  var image = Date.now() + "-image";
  fs.writeFile(
    "./uploads/" + image + ".png",
    base64Image,
    { encoding: "base64" },
    function(err) {
      res.json({ msg: "image created",filename:image + ".png" });
    }
  );
};

router.post("/upload/image", uploadImage);

router.get("/image/:imagename", (req, res) => {
  var imagename = req.params.imagename;
  res.sendFile(path.join(__dirname, "../../uploads/"+imagename));
});

//Get
router.get("/all/:roomno", config.checkToken, (req, res, next) => {
  //router.get("/all", (req, res, next) => {
  var roomno = req.params.roomno;
  Home.getAllByRoom(roomno,(err, data) => {
    res.json(data);
  });
});
module.exports = router;
