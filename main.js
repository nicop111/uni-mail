const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true, // Hides the top menu bar
    webPreferences: {
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("https://outlook.office.com/mail/"); // Change this to your desired website

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
