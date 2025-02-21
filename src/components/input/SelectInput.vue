<script setup lang="ts">
const { options } = defineProps<{ options: { label: string; value: string }[] }>()
const selectedValue = defineModel<string>({ required: true })
</script>

<template>
  <div class="select-wrapper">
    <select v-model="selectedValue">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
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
    padding-right: 50px;

    &:focus {
      outline: 1px solid #ddd;
    }
  }
}
</style>
