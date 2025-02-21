<script setup lang="ts">
import SelectInput from '@/components/input/SelectInput.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { usePlacesRecordsStore } from '@/stores/placesRecords'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'

const placesStore = usePlacesRecordsStore()
const schoolsStore = useSchoolsRecordsStore()

// const selectedDate = ref('anyDate')
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

onMounted(() => {
  placesStore.fetchRegions()
  placesStore.fetchDistricts()
})

watch(selectedRegionId, (newRegion) => schoolsStore.updateRegionId(Number(newRegion)))
watch(selectedDistrictId, (newDistrict) => schoolsStore.updateDistrictId(Number(newDistrict)))
</script>

<template>
  <div class="filters-block">
    <SelectInput :options="regions" v-model="selectedRegionId" />
    <SelectInput :options="districts" v-model="selectedDistrictId" />
  </div>
</template>

<style scoped lang="scss">
.filters-block {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
</style>
