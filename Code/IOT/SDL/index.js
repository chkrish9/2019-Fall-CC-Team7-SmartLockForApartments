const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", function() {
  const electronScreen = electron.screen;
  const { width, height } = electronScreen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({width, height, frame: false });
  mainWindow.setFullScreen(true);
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
});
