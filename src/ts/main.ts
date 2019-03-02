import { BrowserWindow, Tray } from 'electron';
import * as path from 'path';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default class Main {
    static mainWindow: Electron.BrowserWindow;
	static tray: Electron.Tray;
    static application: Electron.App;
	static BrowserWindow: any;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
	}
	
	private static showWindow() {
		Main.mainWindow.show();
		Main.mainWindow.focus();
	};

	// toggle window
	private static toggleWindow() {
		if (Main.mainWindow.isVisible()) {
			Main.mainWindow.hide();
		} else {
			Main.showWindow();
		}
	};

	private static createWindow() {
		// Create the browser window.
		Main.mainWindow = new Main.BrowserWindow({
			width: 1200,
			height: 800,
			webPreferences: {
				nodeIntegration: true
			}
		});

		Main.mainWindow.loadURL('file://' + __dirname + '/../../index.html');

		// Open the DevTools.
		Main.mainWindow.webContents.openDevTools()

		// Emitted when the window is closed.
		Main.mainWindow.on('closed', Main.onClose);

		Main.mainWindow.once('ready-to-show', () => {
			Main.mainWindow.show();
			Main.mainWindow.focus();
		});
	};

	private static onActivate() {
        // On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (Main.mainWindow === null) {
			Main.createWindow();
		}
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow = null;
    }

    private static onReady() {
		// Create a new tray
		Main.tray = new Tray(path.join(__dirname, '../../assets', 'images', 'electron-icon.png'));
		Main.tray.on('right-click', Main.toggleWindow);
		Main.tray.on('double-click', Main.toggleWindow);
		Main.tray.on('click', function (event) {
			Main.toggleWindow();
		});

		Main.createWindow();
		Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
        Main.application.on('activate', Main.onActivate);
    }
}