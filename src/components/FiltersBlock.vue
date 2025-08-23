<script setup lang="ts">
import SelectInput from '@/components/input/SelectInput.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { usePlacesRecordsStore } from '@/stores/placesRecords'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'
import CalendarInput from '@/components/input/CalendarInput.vue'

const placesStore = usePlacesRecordsStore()
const schoolsStore = useSchoolsRecordsStore()

const selectedDate = ref('-1')
const selectedRegionId = ref('-1')
const selectedDistrictId = ref('-1')

const regions = computed(() => {
  const baseData = { label: 'Все регионы', value: '-1' }
  const formatted =
    placesStore.regions?.map((region) => ({ label: region.name, value: String(region.id) })) || []

  return [baseData, ...formatted]
})
const districts = computed(() => {
  const baseData = { label: 'Все округа', value: '-1' }
  const formatted =
    placesStore.districts?.map((district) => ({
      label: district.name,
      value: String(district.id),
    })) || []

  return [baseData, ...formatted]
})

const formatDate = (date: Date | '-1') => {
  if (date === '-1') {
    return '-1'
  }

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

onMounted(() => {
  placesStore.fetchRegions()
  placesStore.fetchDistricts()
})

watch([selectedRegionId, selectedDistrictId, selectedDate], ([newRegion, newDistrict, newDate]) => {
  schoolsStore.updateRegionId(newRegion)
  schoolsStore.updateDistrictId(newDistrict)
  schoolsStore.updateDate(newDate)
})
</script>

<template>
  <div class="filters-block">
    <CalendarInput @get-date="(date) => (selectedDate = formatDate(date!))" />
    <SelectInput :options="regions" v-model="selectedRegionId" />
    <SelectInput :options="districts" v-model="selectedDistrictId" />
  </div>
</template>

<style scoped lang="scss">
.filters-block {
  display: flex;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
}
</style>
