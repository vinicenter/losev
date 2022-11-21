const vite = require('vite');
const electronBuilder = require('electron-builder');

const build = async () => {
    await vite.build();
    await electronBuilder.build()
}

build();
