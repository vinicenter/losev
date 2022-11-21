<script setup>
import { ref } from 'vue';

import Drawer from './Drawer.vue';
import Header from './Header.vue';
import Pages from '../page/Pages.vue';

const tab = ref('devices')
const showDrawer = ref(false)

const setTab = (newTab) => {
  tab.value = newTab
  showDrawer.value = false
}
</script>

<template>
  <QLayout>
    <Header v-model="showDrawer" />

    <Drawer
      v-model="showDrawer"
      @setTab="setTab"
    />

    <Pages :tab="tab" />
  </QLayout>
</template>
