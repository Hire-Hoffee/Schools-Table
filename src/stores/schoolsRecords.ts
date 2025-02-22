import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { APIResponse, SchoolData } from '@/types/schoolRecords'

export const useSchoolsRecordsStore = defineStore('schoolsRecords', () => {
  const schoolsRecords = ref<SchoolData[] | undefined>(undefined)
  const count = ref('10')
  const page = ref('1')
  const totalPages = ref<number | undefined>(undefined)
  const selectedRegionId = ref('-1')
  const selectedDistrictId = ref('-1')
  const selectedDate = ref('')
  const isSchoolsLoading = ref(false)

  const fetchSchoolsRecords = async () => {
    isSchoolsLoading.value = true
    const url = 'https://schooldb.skillline.ru/api'
    const params = new URLSearchParams()

    params.append('count', count.value)
    params.append('page', page.value)

    if (selectedDistrictId.value !== '-1') {
      params.append('federal_district_id', String(selectedDistrictId.value))
    }
    if (selectedRegionId.value !== '-1') {
      params.append('region_id', String(selectedRegionId.value))
    }
    if (selectedDate.value !== '') {
      params.append('updated_at', selectedDate.value)
    }

    const res = await fetch(`${url}/schools?${params}`)
    const result = ((await res.json()) as APIResponse).data

    schoolsRecords.value = result.list
    totalPages.value = result.pages_count
    isSchoolsLoading.value = false
  }

  const updateCount = (value: string) => (count.value = value)
  const updatePage = (value: string) => (page.value = value)
  const updateRegionId = (value: string) => (selectedRegionId.value = value)
  const updateDistrictId = (value: string) => (selectedDistrictId.value = value)
  const updateDate = (value: string) => (selectedDate.value = value)

  return {
    schoolsRecords,
    count,
    page,
    totalPages,
    selectedRegionId,
    selectedDistrictId,
    isSchoolsLoading,
    selectedDate,
    fetchSchoolsRecords,
    updateCount,
    updatePage,
    updateRegionId,
    updateDistrictId,
    updateDate,
  }
})
