<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  timeout: {
    type: Number,
    default: 5000,
  },
})

const isVisible = ref(true)

watchEffect(() => {
  if (props.message) {
    isVisible.value = true
    setTimeout(() => {
      isVisible.value = false
    }, props.timeout)
  }
})

const closeError = () => {
  isVisible.value = false
}
</script>

<template>
  <transition name="fade">
    <div v-if="isVisible" class="error-message">
      <span>{{ message }}</span>
      <button class="close-btn" @click="closeError">&times;</button>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.error-message {
  position: fixed;
  z-index: 1000;
  top: 15px;
  right: 15px;
  background: rgba(255, 69, 58, 0.9);
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
