<script setup lang="ts">
import type { CSSProperties } from 'vue'

const { text, icon } = defineProps<{
  text?: string
  icon?: string
  styles?: CSSProperties
}>()
</script>

<template>
  <button :style="styles">
    <img :src="icon" alt="icon" v-if="icon" />
    <span :style="{ marginLeft: icon ? '8px' : '0' }">{{ text || 'Кнопка' }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  background-color: #33d35e;
  padding: 16px 24px;
  color: #000;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Gotham Pro', sans-serif;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
