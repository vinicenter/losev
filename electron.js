const { app, BrowserWindow } = require('electron');
const path = require('path');
const vite = require('vite');
const httpServer = require('http-server');

const startViteServer = async () => {
	if(process.env.APP_DEV) {
		const server = await vite.createServer();
		server.listen();

		return 'http://localhost:5173';
	} else {
		httpServer.createServer({
				root: path.join(__dirname, 'dist'),
		}).listen(3024);
		// vite doesn't works on build (we don't know why yeat), so we use http-server for that
		//
		// await vite.preview({
		//     preview: {
		//         port: 3024,
		//     }
		// })

		return 'http://localhost:3024';
	}
}

let mainWindow;

app.on('ready', async () => {
	const serverApi = await startViteServer()

	mainWindow = new BrowserWindow({
		width: 380,
		height: 600,
		autoHideMenuBar: true,
		resizable: true,
		icon: path.join(__dirname, 'public/losev-logo-x256.png'),
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			preload: path.join(__dirname, "preload.js")
		},
	});

	mainWindow.loadURL(serverApi);
})
