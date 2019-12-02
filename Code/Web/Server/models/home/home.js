const mongoose = require("mongoose");

//Home schema
const HomeModel = mongoose.Schema({
  roomnumber: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  }
});

const Home = (module.exports = mongoose.model("HomeModel", HomeModel));

module.exports.getAllByRoom = function(roomno, callback) {
  const query = { roomnumber: roomno };
  Home.find(query, callback);
};

module.exports.addImage = function(newImage, callback) {
  //console.log(newAccess);
  newImage.save(callback);
};
