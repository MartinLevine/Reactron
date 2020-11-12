"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var Form = /** @class */ (function () {
    function Form(options) {
        var _this = this;
        this.win = new electron_1.BrowserWindow(options);
        this.win.on('closed', function () {
            _this.win = null;
        });
    }
    Form.prototype.show = function (uri) {
        this.win.loadURL(uri);
        return this;
    };
    Form.prototype.openDevTools = function () {
        this.win.webContents.openDevTools();
        return this;
    };
    return Form;
}());
electron_1.app.on('ready', function () {
    var url = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : "file://" + path.resolve(__dirname, 'public/index.html');
    new Form({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    }).show(url);
});
// 当全部窗口关闭时退出。
electron_1.app.on('window-all-closed', function () {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
