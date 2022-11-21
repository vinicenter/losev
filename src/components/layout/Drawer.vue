<script setup>
const emits = defineEmits(['setTab'])

const setTab = (newTab) => emits('setTab', newTab)
</script>

<template>
  <QDrawer show-if-above side="left" bordered>
    <QItem clickable v-ripple @click="setTab('devices')">
      <QItemSection>
        Devices
      </QItemSection>
    </QItem>
    <QItem clickable v-ripple @click="setTab('settings')">
      <QItemSection>
        Settings
      </QItemSection>
    </QItem>
    <QSeparator />
    <QItem clickable v-ripple @click="setTab('about')">
      <QItemSection>
        About
      </QItemSection>
    </QItem>
  </QDrawer>
</template>