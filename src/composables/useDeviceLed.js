import { getDevices, setDeviceColor, getLEDPermissions } from '../lib/losev'
import { ref, watch } from 'vue'

getLEDPermissions()

const rgbColor = ref('rgb(0, 0, 0)')
const deviceSelected = ref()
const devices = ref(getDevices())

const refreshDevices = () => {
  getLEDPermissions()
  devices.value = getDevices()
}; 

watch(() => rgbColor.value, () => {
  setDeviceColor(deviceSelected.value, rgbColor.value)
})

export default () => {
  return {
    rgbColor,
    deviceSelected,
    refreshDevices,
    devices,
  }
}