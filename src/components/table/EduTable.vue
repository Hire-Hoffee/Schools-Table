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
    <div>
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
  </div>
</template>

<style scoped lang="scss">
.table-container {
  margin-top: 24px;
  position: relative;
}
</style>
