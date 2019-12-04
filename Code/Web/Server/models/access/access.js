const mongoose = require("mongoose");

//Access schema
const AccessModel = mongoose.Schema({
  roomnumber: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  code: {
    type: String
  },
  dateOfEntry: {
    type: String
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  active: {
    type: Boolean
  }
});

const Access = (module.exports = mongoose.model("AccessModel", AccessModel));

module.exports.getAccessById = function(id, callback) {
  Access.findById(id, callback);
};

module.exports.getAllByRoom = function(roomno, callback) {
  const query = { roomnumber: roomno };
  Access.find(query, callback);
};

module.exports.getByTypeAndRoom = function(type, roomno, callback) {
  const query = { type: type, roomnumber: roomno, active: true };
  console.log(query);
  Access.find(query, callback);
};

module.exports.generateCode = function(callback) {
  let code = Math.floor(100000 + Math.random() * 900000);
  this.getByCode(code, (err, data) => {
    console.log(data);
    if (data === null) {
      callback(err, code);
    } else {
      this.getAccessById();
    }
  });
};

module.exports.getByCode = function(code, callback) {
  const query = { code: code };
  console.log(query);
  Access.findOne(query, callback);
};

module.exports.addAccess = function(newAccess, callback) {
  console.log(newAccess);
  newAccess.save(callback);
};

module.exports.updateAccess = function(id, updateQuery, callback) {
  Access.findByIdAndUpdate(id, { $set: updateQuery }, callback);
};

module.exports.deleteAccess = function(id, callback) {
  Access.remove({ _id: id }, callback);
};

module.exports.getAccess = function(callback) {
  Access.find(callback);
};
