<script setup lang="ts">
import HeaderLine from './HeaderLine.vue'
import ItemLine from './ItemLine.vue'
import type { SchoolData } from '@/types/schoolRecords'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'
import SkeletonLoader from '@/components/SkeletonLoader.vue'

defineProps<{
  schools: SchoolData[] | undefined
}>()

const schoolsStore = useSchoolsRecordsStore()
</script>

<template>
  <div class="table-container">
    <SkeletonLoader v-if="schoolsStore.isSchoolsLoading" />
    <HeaderLine />
    <div v-if="schools && schools.length > 0">
      <ItemLine
        v-for="school in schools"
        :key="school.uuid"
        :school="{
          region: school.edu_org.region.name,
          title: school.edu_org.short_name,
          address: school.edu_org.contact_info.post_address,
          level: school.supplements[0].educational_programs,
        }"
      />
    </div>
    <div v-else class="not-found">
      <p>Ничего не найдено</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-container {
  margin-top: 24px;
  position: relative;
  overflow: hidden;
  overflow-x: auto;

  .not-found {
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding: 10px;
  }
}
</style>
