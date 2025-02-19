<script setup lang="ts"></script>

<template>
  <div class="input-wrapper">
    <input type="text" placeholder="Поиск" />
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  position: relative;

  &::after {
    content: url('@/assets/images/search.svg');
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  input {
    position: relative;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid #eee;
    width: 300px;
    font-size: 16px;

    &:focus {
      outline: 1px solid #ddd;
    }
  }
}
</style>
