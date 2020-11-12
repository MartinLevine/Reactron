import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron'
import * as path from 'path'

class Form {
    public win!: BrowserWindow | null

    constructor(options: BrowserWindowConstructorOptions) {
        this.win = new BrowserWindow(options)
        this.win.on('closed', () => {
            this.win = null
        })
    }

    public show(uri: string) {
        this.win!.loadURL(uri)
        return this
    }

    public openDevTools() {
        this.win!.webContents.openDevTools()
        return this
    }
}

app.on('ready', () => {
    const url =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : `file://${path.resolve(__dirname, 'public/index.html')}`
    new Form({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    }).show(url)
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
