const { exec } = require("child_process");
const sudo = require('sudo-prompt');
const fs = require('fs');

const ledDevicesDir = '/sys/class/hidraw/hidraw4/device/leds/';

export const getDevices = () => {
  const devices = [];

  const files = fs.existsSync(ledDevicesDir) && fs.readdirSync(ledDevicesDir);

  if(files) {
    files.forEach(file => {
      const device = file.replace(':blue', '').replace(':green', '').replace(':red', '').replace(':global', '');
      if(device) {
        devices.some(device => device === device) || devices.push(device);
      }
    });
  }

  return devices;
}

export const setDeviceColor = (device, rgb) => {
  const rgbArray = rgb.replace('rgb(', '').replace(')', '').split(',')

  if(device && rgbArray) {
    exec(`
      echo ${rgbArray[0]} > ${ledDevicesDir}${device}:red/brightness &
      echo ${rgbArray[1]} > ${ledDevicesDir}${device}:green/brightness &
      echo ${rgbArray[2]} > ${ledDevicesDir}${device}:blue/brightness
    `);
  }
}

export const getLEDPermissions = () => {
  const options = {
    name: 'Electron',
  };

  sudo.exec(`chmod 777 -R ${ledDevicesDir}`, options);
}
