const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//User schema
const UserModel = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateOfJoin: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const User = (module.exports = mongoose.model("UserModel", UserModel));

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getAllByRoom = function(username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
};

module.exports.getUserByEmail = function(email, callback) {
  const query = { email: email };
  User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
  //console.log(newUser);
  if (newUser.password !== "") {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  } else {
    newUser.save(callback);
  }
};

module.exports.updateUser = function(id, updateQuery, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(updateQuery.password, salt, (err, hash) => {
      if (err) throw err;
      updateQuery.password = hash;
      User.findByIdAndUpdate(id, { $set: updateQuery }, callback);
    });
  });
};

module.exports.deleteUser = function(id, callback) {
  User.remove({ _id: id }, callback);
};

module.exports.getUsers = function(callback) {
  User.find(callback);
};

module.exports.comparePassword = function(userPassword, hash, callback) {
  bcrypt.compare(userPassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

module.exports.getUserNames = function(name, callback) {
  //console.log(name);
  User.find({ username: { $regex: ".*" + name + ".*" } }, callback);
};
