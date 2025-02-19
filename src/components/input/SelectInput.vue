<script setup lang="ts"></script>

<template>
  <div class="select-wrapper">
    <select>
      <option value="all" selected>Все виды</option>
      <option value="Permanent">Постоянное</option>
      <option value="Unknown">Не определен</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.select-wrapper {
  width: 100%;
  position: relative;

  &::after {
    content: url('@/assets/images/arrow_down.svg');
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.2s;
  }

  &:focus-within::after {
    transform: translateY(-50%) rotate(180deg);
    transition: 0.2s;
  }

  select {
    width: inherit;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid #eee;
    appearance: none;
    font-size: 16px;
    cursor: pointer;

    &:focus {
      outline: 1px solid #ddd;
    }
  }
}
</style>
