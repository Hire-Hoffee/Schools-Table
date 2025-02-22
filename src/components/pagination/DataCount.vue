<script setup lang="ts">
import { ref, watch } from 'vue'
import SelectInput from '../input/SelectInput.vue'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'

const schoolsStore = useSchoolsRecordsStore()
const selectedValue = ref(String(schoolsStore.count))
const options = [
  { label: '5', value: '5' },
  { label: '10', value: '10' },
  { label: '20', value: '20' },
]

watch(selectedValue, (newValue) => schoolsStore.updateCount(newValue))
</script>

<template>
  <div class="count-container">
    <p>1-8 из 50 записей</p>
    <div>
      <p>Показывать</p>
      <SelectInput v-model="selectedValue" :options="options" />
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
