var users = require("../modules/users/userrouter");
var login = require("../modules/users/loginrouter");
var room = require("../modules/room/roomsrouter");
module.exports = function router(app) {
  app.use("/users", users);
  app.use("/login", login);
  app.use("/room", room);
};
