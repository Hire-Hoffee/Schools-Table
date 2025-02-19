<script setup lang="ts">
import EduTable from '@/components/table/EduTable.vue'
import SelectInput from '@/components/input/SelectInput.vue'
</script>

<template>
  <h1>Таблица учреждений</h1>
  <div class="inputs-block">
    <SelectInput />
    <SelectInput />
    <SelectInput />
  </div>
  <EduTable />
</template>

<style scoped lang="scss">
h1 {
  font-weight: bold;
}

.inputs-block {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
</style>
