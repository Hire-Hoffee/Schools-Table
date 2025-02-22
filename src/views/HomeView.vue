<script setup lang="ts">
import EduTable from '@/components/table/EduTable.vue'
import SearchInput from '@/components/input/SearchInput.vue'
import FilersBlock from '@/components/FiltersBlock.vue'
import ButtonInput from '@/components/input/ButtonInput.vue'
import PaginationBlock from '@/components/pagination/PaginationBlock.vue'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'
import { onMounted, watch, ref, computed } from 'vue'

const schoolsStore = useSchoolsRecordsStore()
const searchValue = ref('')
const foundData = computed(() => {
  if (!searchValue.value) {
    return []
  }
  return schoolsStore.schoolsRecords.filter((school) =>
    school.edu_org.short_name?.toLowerCase().includes(searchValue.value?.toLowerCase()),
  )
})

onMounted(() => {
  if (schoolsStore.schoolsRecords.length === 0) {
    schoolsStore.fetchSchoolsRecords()
  }
})
watch(
  [
    () => schoolsStore.count,
    () => schoolsStore.page,
    () => schoolsStore.selectedRegionId,
    () => schoolsStore.selectedDistrictId,
    () => schoolsStore.selectedDate,
  ],
  () => schoolsStore.fetchSchoolsRecords(),
)
</script>

<template>
  <div class="header">
    <h1>Таблица учреждений</h1>
    <div class="search-block">
      <SearchInput v-model="searchValue" />
      <ButtonInput />
    </div>
  </div>
  <FilersBlock />
  <EduTable :schools="foundData.length ? foundData : schoolsStore.schoolsRecords" />
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

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 24px;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
    div {
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>
