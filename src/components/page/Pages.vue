<script setup>
import { defineProps } from 'vue'

import Devices from './tabs/Devices.vue'
import Settings from './tabs/Settings.vue'
import About from './tabs/About.vue'

defineProps({
  tab: {
    type: String,
    required: true,
    default: 'devices'
  },
})
</script>

<template>
  <QPageContainer>
    <QTabPanels :model-value="tab" keep-alive>
      <QTabPanel name="devices">
        <Devices />
      </QTabPanel>

      <QTabPanel name="settings">
        <Settings />
      </QTabPanel>

      <QTabPanel name="about">
        <About />
      </QTabPanel>
    </QTabPanels>
  </QPageContainer>
</template>