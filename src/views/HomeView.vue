<script setup lang="ts">
import EduTable from '@/components/table/EduTable.vue'
import SelectInput from '@/components/input/SelectInput.vue'
import SearchInput from '@/components/input/SearchInput.vue'
import ButtonInput from '@/components/input/ButtonInput.vue'
import PaginationBlock from '@/components/pagination/PaginationBlock.vue'
import { useSchoolsRecordsStore } from '@/stores/SchoolsRecords'
import { onMounted } from 'vue'

const schoolsStore = useSchoolsRecordsStore()
onMounted(() => schoolsStore.fetchSchoolsRecords())
</script>

<template>
  <div class="header">
    <h1>Таблица учреждений</h1>
    <div>
      <SearchInput />
      <ButtonInput />
    </div>
  </div>
  <div class="inputs-block">
    <SelectInput />
    <SelectInput />
    <SelectInput />
  </div>
  <EduTable :schools="schoolsStore.schoolsRecords" />
  <PaginationBlock />
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 20px;
  }
}

.inputs-block {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
</style>
