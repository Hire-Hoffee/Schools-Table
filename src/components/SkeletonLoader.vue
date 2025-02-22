<script setup lang="ts"></script>

<template>
  <div class="skeleton-overlay"></div>
</template>

<style scoped lang="scss">
.skeleton-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(200, 200, 200, 0.3) 25%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(200, 200, 200, 0.3) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 5s infinite linear;
  backdrop-filter: blur(5px);
  z-index: 9999;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
