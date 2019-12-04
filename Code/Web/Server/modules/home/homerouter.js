const express = require("express");
const router = express.Router();
const fs = require("fs");
const mime = require("mime");

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
      res.json({ msg: "image created" });
    }
  );
};

router.post("/upload/image", uploadImage);

module.exports = router;
