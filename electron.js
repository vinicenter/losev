const { app, BrowserWindow } = require('electron');
const path = require('path');
const vite = require(path.join(__dirname, 'node_modules/vite/index.cjs'));

const startViteServer = async () => {
	if(process.env.APP_DEV) {
		const server = await vite.createServer();
		await server.listen();

		return `http://localhost:${server.config.server.port}`;
	} else {
		const server = await vite.preview();

		return `http://localhost:${server.config.preview.port}`;
	}
}

let mainWindow;

app.on('ready', async () => {
	const serverApi = await startViteServer()

	mainWindow = new BrowserWindow({
		width: 380,
		height: 600,
		autoHideMenuBar: true,
		resizable: false,
		icon: path.join(__dirname, 'public/losev-logo-x256.png'),
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			preload: path.join(__dirname, "preload.js")
		},
	});

	mainWindow.loadURL(serverApi);
})
