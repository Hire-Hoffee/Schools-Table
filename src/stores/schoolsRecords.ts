import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { APIResponse, SchoolData } from '@/types/schoolRecords'

export const useSchoolsRecordsStore = defineStore('schoolsRecords', () => {
  const schoolsRecords = ref<SchoolData[] | undefined>(undefined)
  const count = ref(10)
  const page = ref(1)
  const totalPages = ref<number | undefined>(undefined)
  const selectedRegionId = ref(-1)
  const selectedDistrictId = ref(-1)

  const fetchSchoolsRecords = async () => {
    const url = 'https://schooldb.skillline.ru/api'
    const params = new URLSearchParams()

    params.append('count', String(count.value))
    params.append('page', String(page.value))

    if (Number(selectedDistrictId.value) !== -1) {
      params.append('federal_district_id', String(selectedDistrictId.value))
    }
    if (Number(selectedRegionId.value) !== -1) {
      params.append('region_id', String(selectedRegionId.value))
    }

    const res = await fetch(`${url}/schools?${params}`)
    const result = ((await res.json()) as APIResponse).data

    schoolsRecords.value = result.list
    totalPages.value = result.pages_count
  }

  const updateCount = (value: number) => (count.value = value)
  const updatePage = (value: number) => (page.value = value)
  const updateRegionId = (value: number) => (selectedRegionId.value = value)
  const updateDistrictId = (value: number) => (selectedDistrictId.value = value)

  return {
    schoolsRecords,
    count,
    page,
    totalPages,
    selectedRegionId,
    selectedDistrictId,
    fetchSchoolsRecords,
    updateCount,
    updatePage,
    updateRegionId,
    updateDistrictId,
  }
})
