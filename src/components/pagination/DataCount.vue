<script setup lang="ts">
import SelectInput from '../input/SelectInput.vue'
</script>

<template>
  <div class="count-container">
    <p>1-8 из 50 записей</p>
    <div>
      <p>Показывать</p>
      <SelectInput />
    </div>
  </div>
</template>

<style scoped lang="scss">
.count-container {
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
</style>
