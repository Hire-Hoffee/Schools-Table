<script setup lang="ts">
import HeaderLine from './HeaderLine.vue'
import ItemLine from './ItemLine.vue'
import type { SchoolData } from '@/types/schoolRecords'

defineProps<{
  schools: SchoolData[] | null
}>()
</script>

<template>
  <div class="table-container">
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
}
</style>
