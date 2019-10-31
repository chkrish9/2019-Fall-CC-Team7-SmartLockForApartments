const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Rooms schema
const RoomModel = mongoose.Schema({
  roomnumber: {
    type: String,
    required: true
  },
  floor: {
    type: String,
    required: true
  },
  isVacant: {
    type: Boolean,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "UserModel"
  }
});

const Room = (module.exports = mongoose.model("RoomModel", RoomModel));

module.exports.getRoomById = function(id, callback) {
  Room.findById(id, callback);
};

module.exports.getRoomByUserId = function(id, callback) {
  Room.findOne({ 'user': id }, callback);
};

module.exports.addRoom = function(newRoom, callback) {
  //console.log(newUser);
  newRoom.save(callback);
};

module.exports.addRooms = function(newRooms, callback) {
  //console.log(newUser);
  Room.insertMany(newRooms, callback);
};

module.exports.updateRoom = function(id, updateQuery, callback) {
  Room.findByIdAndUpdate(id, { $set: updateQuery }, callback);
};

module.exports.deleteRoom = function(id, callback) {
  Room.remove({ _id: id }, callback);
};

module.exports.getRooms = function(callback) {
  Room.find(callback);
};
