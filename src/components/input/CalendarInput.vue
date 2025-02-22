<script setup lang="ts">
const selectedDateValue = defineModel<string>({ required: true })
</script>

<template>
  <div class="input-wrapper">
    <input v-model="selectedDateValue" class="date-input" type="date" />
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  width: 100%;

  .date-input {
    width: 100%;
    position: relative;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid #eee;
    font-size: 16px;

    &:focus {
      outline: 1px solid #ddd;
    }
  }
}
</style>
