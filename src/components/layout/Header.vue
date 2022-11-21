<script setup>
import isDarkUtil from '../../utils/isDark'

import useDeviceLed from '../../composables/useDeviceLed';

import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const { rgbColor } = useDeviceLed()

const isDark = computed(() => isDarkUtil(rgbColor.value))

const emits = defineEmits(['update:model-value'])

const toggleLeftDrawer = () => emits('update:model-value', !props.modelValue)
</script>

<template>
  <QHeader :style="`background-color: ${rgbColor}; color: ${isDark ? '#000' : '#fff'}`" elevated>
    <QToolbar>
      <QBtn
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer()"
      />

      <QToolbarTitle>
        <QAvatar size="sm">
          <img :src="`/public/losev-${isDark ? 'black' : 'white'}-logo-x256.png`">
        </QAvatar>
        Losev
      </QToolbarTitle>
    </QToolbar>
  </QHeader>
</template>