<script setup lang="ts">
import { ref, watch } from 'vue'
import { debounce } from 'lodash-es'

const searchValue = defineModel<string>({ required: true })
const tempValue = ref(searchValue.value)

const updateSearchValue = debounce((val: string) => {
  searchValue.value = val
}, 500)

watch(tempValue, (newVal) => {
  updateSearchValue(newVal)
})
</script>

<template>
  <div class="input-wrapper">
    <input v-model="tempValue" type="text" placeholder="Поиск по названию" />
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
