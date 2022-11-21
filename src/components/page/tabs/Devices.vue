<script setup>
import useDeviceLed from '../../../composables/useDeviceLed';

const {
  rgbColor,
  deviceSelected,
  devices,
  refreshDevices,
} = useDeviceLed();

const refresh = () => {
  refreshDevices()
  deviceSelected.value = undefined
}
</script>

<template>
  <QSelect v-model="deviceSelected" :options="devices" clearable>
    <template v-slot:append>
      <QIcon 
        name="refresh"
        @click="refresh"
        @click.prevent.stop
      />
    </template>
  </QSelect>

  <div
    v-if="deviceSelected"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    "
  >
    <QColor
      format-model="rgb"
      v-model="rgbColor"
    />
  </div>
</template>