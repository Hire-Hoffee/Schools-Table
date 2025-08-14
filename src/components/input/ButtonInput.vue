<script setup lang="ts">
import docImg from '@/assets/images/doc.svg'
</script>

<template>
  <button>
    <!-- апишка не работает для скачивания, поэтому реализацию делать без тестирования не очень хочется  -->
    <img :src="docImg" alt="doc" />
    <span>Скачать</span>
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
    opacity: 0.9;
    transition: 0.2s;
  }

  span {
    margin-left: 8px;
  }
}
</style>
