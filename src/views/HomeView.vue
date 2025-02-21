<script setup lang="ts">
import EduTable from '@/components/table/EduTable.vue'
import SearchInput from '@/components/input/SearchInput.vue'
import FilersBlock from '@/components/FiltersBlock.vue'
import ButtonInput from '@/components/input/ButtonInput.vue'
import PaginationBlock from '@/components/pagination/PaginationBlock.vue'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'
import { onMounted, watch } from 'vue'

const schoolsStore = useSchoolsRecordsStore()

onMounted(() => schoolsStore.fetchSchoolsRecords())
watch(
  [
    () => schoolsStore.count,
    () => schoolsStore.page,
    () => schoolsStore.selectedRegionId,
    () => schoolsStore.selectedDistrictId,
  ],
  () => schoolsStore.fetchSchoolsRecords(),
)
</script>

<template>
  <div class="header">
    <h1>Таблица учреждений</h1>
    <div>
      <SearchInput />
      <ButtonInput />
    </div>
  </div>
  <FilersBlock />
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
</style>
